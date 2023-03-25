window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }
function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}
function audio2() {
  document.getElementById('btn_audio2').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio2').play(); //クリックしたら音を再生
}
// muteの切り替え
function mute() {
  if (document.getElementById('btn_audio').muted) {
      document.getElementById('btn_audio').muted = false;
      document.getElementById('btn_audio2').muted = false;
  } else {
      document.getElementById('btn_audio').muted = true;
      document.getElementById('btn_audio2').muted = true;
  }
}
const $clear = document.getElementById('clear');
const $judge_text_clear = document.getElementById('judge_text_clear');
$clear.addEventListener('click',() => {
  $judge_text_clear.classList.add('on');
  $judge_text_faiure.classList.remove('on');
});
const $faiure = document.getElementById('faiure');
const $judge_text_faiure = document.getElementById('judge_text_faiure');
$faiure.addEventListener('click',() => {
  $judge_text_faiure.classList.add('on');
  $judge_text_clear.classList.remove('on');
});
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 80000,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 400){//上から400pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  }else{
    if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 700);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
