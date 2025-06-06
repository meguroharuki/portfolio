$(function(){
    // TOPに戻るボタン
        var topBtn = $('#page-top');
        topBtn.hide();
     
        //スクロールが100に達したらボタン表示
        $(window).scroll(function () {
            var w = $(window).width();
            if ($(this).scrollTop() > 100) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
     
        //スムーススクロールでページトップへ
        topBtn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });


    const text = "卒業・進級制作 | MTG作成会議システムZION-MEETのランディングページ制作";
    const typingText = document.getElementById("");
    let i = 0;
  
    function typeWriter() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // 表示速度を調整
      }
    }
  
    typeWriter();
 