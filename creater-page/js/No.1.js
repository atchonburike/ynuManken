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
            case "さくらもち":
                modalCon.textContent = "\"疲れているなら桜餅はいかがですか～？🦊\"";
                modalCon1.textContent = "『春』がテーマの清陵祭2026の部誌にて生まれた桜餅モチーフの和メイド狐ちゃん";
                modalCon2.textContent = "はじめに描いていたほうが没になり、4時間で仕上げたので可愛いけど特に設定とかない";
                modalCon3.textContent = "疲れてそうな人にお茶と桜餅だしてくれそう";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            case "ミリしら: 禪院 真希":
                modalCon.textContent = "\"邪魔しないで……\"";
                modalCon1.textContent = "サークル活動中にした『呪術廻戦ミリしら企画』にて、『禪院 真希』というキャラをミリしらで描いてできた子";
                modalCon2.textContent = "眼鏡をかけてて、普段はおとなしいけど戦うときは太刀一本でどんな敵とも渡り合う超つよつよかわいいきつねちゃん";
                modalCon3.textContent = "眼鏡っ孤もいいですね……！";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            case "ゆめにゃんこ":
                modalCon.textContent = "\"腹減ってる人いる？「ぎしち」いきますか！\"";
                modalCon1.textContent = "サークルのメンバーをにゃんこ化してできた子";
                modalCon2.textContent = "ドラムが得意だぞ！！🐾";
                modalCon3.textContent = "";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            case "ポンチョきつねちゃん":
                modalCon.textContent = "\"雨ですよ～～～\"";
                modalCon1.textContent = "雨の日のポンチョきつねちゃん";
                modalCon2.textContent = "雨が好きではしゃぐきつねちゃんかわいい！";
                modalCon3.textContent = "";
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