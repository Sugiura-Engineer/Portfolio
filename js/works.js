$(document).ready(function() { //$はjqueryを使いますという意味.document.getElementByID('all_tag')を、$('all_tag')と書ける.
    // 全てのiconにクリックイベント.１行目は、ページ全体のHTMLが読み終えたらこの中のコードを実行してくれという意味.
    $('.icon').on('click', function() {
        // クリックされたアイコンのIDを取得
        const clickedId = $(this).attr('id');//thisは今クリックされた要素、attrはattribute(属性)をとるという意味.

        if (clickedId === 'all_tag') {
            // Allを押したら全部表示
            $('.article_container').show();
        } else if (clickedId === 'react_tag') {
            // Reactタグを押したら
            $('.article_container').hide(); // いったん全部消す
            $('.article_container[data-category*="react"]').show(); // Reactだけ表示
            noResultMessage();
        } else if (clickedId === 'nodejs_tag') {
            // Node.jsタグを押したら
            $('.article_container').hide();
            $('.article_container[data-category*="aaa"]').show();
            noResultMessage();
        }
    });
});

function noResultMessage() {
    // 表示されている記事を数える
    const visibleArticles = $('.article_container:visible').length;
    
    if (visibleArticles === 0) {
      $('#no_result').show();
    } else {
      $('#no_result').hide();
    }
  }

$('#no_result').hide();