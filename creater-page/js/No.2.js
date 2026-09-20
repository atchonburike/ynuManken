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
            case "名もなき小石":
                modalCon.textContent = "\"キミの願い、聞こえたよ\"";
                modalCon1.textContent = "2025清陵祭の夜に生まれた流れ星の擬人化";
                modalCon2.textContent = "宇宙にたくさんいる子";
                modalCon3.textContent = "地球の重力に捕まるまで暇そうに漂っている";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            case "イナバ":
                modalCon.textContent = "\"人参ちょうだい\"";
                modalCon1.textContent = "2025常磐祭、横国漫研紀で登場したとされる白兎、クソガキ";
                modalCon2.textContent = "おしゃれ好きだが金がない";
                modalCon3.textContent = "寒がり";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            case "ばしゃばしゃさん":
                modalCon.textContent = "\"きみの帰り道が晴れていますように\"";
                modalCon1.textContent = "ある田舎の神社に住んでいるかもしれない神さま";
                modalCon2.textContent = "小さい頃しか出会えない";
                modalCon3.textContent = "";
                modalCon4.textContent = "";
                modalCon5.textContent = "";
                break;
            case "春の子":
                modalCon.textContent = "\"～♪【うれしいひなまつり】\"";
                modalCon1.textContent = "雪解けの妖精";
                modalCon2.textContent = "毎年春の初めに雪山を登り、雪を溶かしてくれる";
                modalCon3.textContent = "桜が咲く前に小屋に戻り、冬眠して次の春を待つ";
                modalCon4.textContent = "山ごとに約1体住んでいる。";
                modalCon5.textContent = "";
                break;
            case "サメちゃん":
                modalCon.textContent = "\"ウサギ肉もアリだな…\"";
                modalCon1.textContent = "2025常盤祭、横国漫研紀で登場したとされるサメ";
                modalCon2.textContent = "イナバに騙されたサメさん達";
                modalCon3.textContent = "なぜかよくワニと間違えられるが、サメ";
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