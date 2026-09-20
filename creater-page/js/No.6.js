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
            case "ローズ":
                modalCon.textContent = "\"……服の破れ目から世界の裂け目まで、何でも縫って差し上げます\"";
                modalCon1.textContent = "\"救世主？なに、ただの仕事だよ。頼まれてやっただけ。\"";
                modalCon2.textContent = "特別な糸と針を使って、平行世界を跨ぐ、破れた結界を縫う職人";
                modalCon3.textContent = "過去は悪魔だったが、罰として亜空間に投げられ、今いる世界に落ちる、友人(？)に恵まれてなんとか生きている";
                modalCon4.textContent = "基本マイペースで屁理屈が多い、締切前日や危険な状態になると動くが、出来はプロ顔負け";
                modalCon5.textContent = "親しい仲は一応大切にする";
                break;
            case "王 余暉(わん よき)":
                modalCon.textContent = "\"……\"";
                modalCon1.textContent = "お友達にはなりたくない人作ろ〜で生まれた子";
                modalCon2.textContent = "中華マフィアで現在行方不明";
                modalCon3.textContent = "りおんとはお友達";
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