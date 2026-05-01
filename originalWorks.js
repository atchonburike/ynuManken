const gallery = document.getElementById(`works_container`);
const folderName = `works`;

let i = 1;

const worksInfo = [
    [`ぶりけ`,`https://x.com/sugiru_yaoyoros`],
    [`とっきー`, ``]
]

async function loadAllGalleries() {

    // 外側のループ：フォルダを1つずつ処理
    for (const info of worksInfo) {
        console.log(`--- ${info[0]} フォルダの読み込み開始 ---`);
        
        let i = 0;
        let hasNextImage = true;

        var rowContainer2 = document.createElement(`tr`);
        var infoContainer = document.createElement(`td`);
        var memberName = document.createElement(`a`);

        memberName.href = info[1];
        memberName.innerHTML = `${info[0]} 作`;
        memberName.target = "_blank";

        infoContainer.appendChild(memberName);
        rowContainer2.appendChild(infoContainer);

        gallery.appendChild(rowContainer2);

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
                        var imageContainer = document.createElement(`td`);
                        var imageLink = document.createElement(`a`);

                        img.className = "artworks";
                        imageLink.href = img.src; // リンク先
                        imageLink.target = "_blank";

                        imageLink.appendChild(img);        // a の中に img を入れる
                        imageContainer.appendChild(imageLink); // td の中に a を入れる
                        gallery.appendChild(imageContainer);
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
    }
    console.log("すべてのフォルダの読み込みが完了しました！");
}

// 実行
loadAllGalleries();