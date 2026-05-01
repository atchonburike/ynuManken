const gallery = document.getElementById(`artworkGallary`);
const folderName = `works`;

async function loadCsvTo2DArray() {
  try {
    const response = await fetch('./works/data.txt'); // パスは適宜変更してください
    if (!response.ok) throw new Error('読み込み失敗');

    const csvText = await response.text();

    // 1. 改行コードで分割して「行」の配列を作る
    // \r\n (Windows) と \n (Unix/Mac) 両方に対応させるため正規表現を使用
    const rows = csvText.trim().split(/\r?\n/);

    // 2. 各行をさらにカンマで分割して2次元配列にする
    const csvArray = rows.map(row => row.split(','));

    console.log(csvArray);
    return csvArray;

  } catch (error) {
    console.error('エラー:', error);
  }
}



// const worksInfo = [
//     [`ぶりけ`,`https://x.com/sugiru_yaoyoros`],
//     [`とっきー`, ``]
// ]

async function loadAllGalleries(worksInfo) {

    // 外側のループ：フォルダを1つずつ処理
    for (const info of worksInfo) {
        console.log(`--- ${info[0]} フォルダの読み込み開始 ---`);
        
        let i = 0;
        let hasNextImage = true;

        var tableContainer = document.createElement(`div`);
        var table = document.createElement(`table`);
        var rowContainer1 = document.createElement(`tr`);
        var infoContainer = document.createElement(`td`);
        var memberName = document.createElement(`a`);

        memberName.href = info[1];
        memberName.innerHTML = `${info[0]} 作`;
        memberName.target = "_blank";

        infoContainer.appendChild(memberName);
        rowContainer1.appendChild(infoContainer);
        table.appendChild(rowContainer1);

        tableContainer.className = "works_table_container";
        table.className = "works_table";

        var rowContainer2 = document.createElement(`tr`);
        rowContainer2.className = "artworks_tr";

        // 内側のループ：そのフォルダ内の画像を連番で読み込む
        while (hasNextImage) {
            try {
                await new Promise((resolve, reject) => {
                    const img = new Image();
                    // パスの組み立て（例: ./works/img0.jpg）
                    img.src = `./${folderName}/${info[0]}/${i}.png`;
                    console.log(`./${folderName}/${info[0]}/${i}.png`);
                    img.onload = () => {

                        console.log(`${i} を読み込んだ`);
                        // クラスを付与しておくと、フォルダごとのCSS操作が楽になります
                        img.classList.add(`from-${folderName}`);
                        var imageContainer = document.createElement(`div`);
                        var imageLink = document.createElement(`a`);

                        imageContainer.className = "artworks_td";
                        img.className = "artworks";
                        imageLink.href = img.src; // リンク先
                        imageLink.target = "_blank";

                        imageLink.appendChild(img);        // a の中に img を入れる
                        imageContainer.appendChild(imageLink); // td の中に a を入れる
                        rowContainer2.insertBefore(imageContainer, rowContainer2.firstChild);
                        table.appendChild(rowContainer2);
                        tableContainer.appendChild(table);
                        i++;
                        resolve();
                        
                    };

                    img.onerror = () => {
                        hasNextImage = false; // そのフォルダの画像が尽きたらループ終了
                        console.log(`${info[0]} の読み込みが完了しました（計 ${i} 枚）`);
                        reject();
                    };
                });
            } catch (e) {
                
                // 画像が途切れた際の rejection をキャッチして次のフォルダへ
                break;
            }
        }
        gallery.appendChild(tableContainer);
    }
    console.log("すべてのフォルダの読み込みが完了しました！");
}


async function main(){
    const data = await loadCsvTo2DArray()
    if (data) {
        loadAllGalleries(data);
    }
}

main();