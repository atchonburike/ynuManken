const galleryItems = document.querySelectorAll('.gallery-img-list-icon-img');
const modalImg = document.getElementById('gallery-img');
const modalTitle = document.getElementById('gallery-title');

const modalCon = document.getElementById('gallery-comment');
const modalCon1 = document.getElementById('gallery-description-con-1');
const modalCon2 = document.getElementById('gallery-description-con-2');
const modalCon3 = document.getElementById('gallery-description-con-3');
const modalCon4 = document.getElementById('gallery-description-con-4');
const modalCon5 = document.getElementById('gallery-description-con-5');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

galleryItems.forEach(item => {
  item.addEventListener('click', async () => {
    console.log('clicked!');
        //クリックされた画像に対応する全体画像を取得
        const fullImgUrl = item.getAttribute('data-full') || item.src;
        //モーダルの画像タグに全体画像を設定
        modalImg.src = fullImgUrl;
        //クリックされた画像に対応するタイトルを取得
        const titleCon = item.getAttribute('alt') || "N/A";
        //モーダルのタイトルタグにタイトルを設定
        modalTitle.textContent = titleCon;
        switch(titleCon){
            case "ヒスイ":
                modalCon.textContent = "\"……\"";
                modalCon1.textContent = "死者の魂を統べる戦闘キョンシー";
                modalCon2.textContent = "使い魔的存在の魂を使役して戦う";
                modalCon3.textContent = "生前の記憶はない";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            case "椿":
                modalCon.textContent = "\"……\"";
                modalCon1.textContent = "てばもとが描く年賀状に登場するキャラ";
                modalCon2.textContent = "羽子板はヘタ";
                modalCon3.textContent = "";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            case "月の女神":
                modalCon.textContent = "\"……\"";
                modalCon1.textContent = "月の女神、圧倒的上位存在";
                modalCon2.textContent = "逆らう者には容赦しない";
                modalCon3.textContent = "上位存在であるため、人間が名前を知ることは許されていない";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            default:
                modalCon.textContent = "";
                modalCon1.textContent = "";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
        }
  });
});

// モーダルボタンをクリックしたときのイベントを登録
/*galleryItems.addEventListener('click', (e) => {
        
});
*/