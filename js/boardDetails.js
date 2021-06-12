var details = JSON.parse(sessionStorage.getItem('details'));
var title = document.getElementById('title-col').getElementsByTagName('p')[0];
var listContainer = document.getElementsByClassName('container')[0];
var listCols = listContainer.getElementsByClassName('col-auto');
var contentContainer = document.getElementsByClassName('container')[1];
var boardBtn = document.getElementById('board_btn');
var comments = document.getElementsByClassName('comment');

title.textContent = details.title;
listCols[0].innerHTML = '<span><i class="bi bi-eye"></i></span> ' + details.view;
listCols[1].innerHTML = '<span><i class="bi bi-calendar-date"></i></span> ' + details.date;
contentContainer.textContent = details.content;

if (details.boardNo===1) {
    listCols[2].innerHTML = '<span><i class="bi bi-chat-dots"></i></span> ' + comments.length;
    document.getElementsByClassName('container')[3].style.display = 'block';
} else {
    listCols[2].innerHTML = '<span><i class="bi bi-chat-dots"></i></span> 0';
    document.getElementsByClassName('container')[3].style.display = 'none';
}

boardBtn.onclick = function() {
    window.location.href='file:///C:/netflix-board/html/board.html';
}