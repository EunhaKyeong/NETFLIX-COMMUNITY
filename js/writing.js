var boardTitle = document.getElementsByClassName('board-title')[0];
var boardBtn = document.getElementById('board_btn');
var writeBtn = document.getElementsByClassName('btn-write')[0];

boardBtn.onclick = function() {
    window.location.href='file:///C:/netflix-board/html/board.html';
}

writeBtn.onclick = function() {
    if (sessionStorage.getItem('boardNo')===null) {
        var boardNo = 1;
    } else {
        var boardNo = Number(sessionStorage.getItem('boardNo')) + 1;
    }
    var title = document.getElementsByName('title')[0];
    var spoiler = document.getElementsByName('spoiler')[0];
    var image = document.getElementsByName('image')[0];
    var content = document.getElementsByName('content')[0];

    if (spoiler.checked) {
        spoiler.value = 1;
    } else {
        spoiler.value = 0;
    }

    var today = new Date();
    var date = today.getMonth()+1 + '/' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();

    var formData = {
        "boardNo": boardNo, 
        "title": title.value,
        "spoiler": spoiler.value,
        "date": date,
        "view": 0,
        "image": image.value,
        "content": content.value
    }

    var boardObj = {};
    var dataArr = [];
    if (localStorage.getItem(boardTitle.textContent)===null) {
        boardObj['board'] = boardTitle.textContent;
        dataArr.push(formData);
        boardObj['data'] = dataArr;
        localStorage.setItem(boardTitle.textContent, JSON.stringify(boardObj));
    } else {
        boardObj = JSON.parse(localStorage.getItem(boardTitle.textContent));
        dataArr = boardObj.data;
        dataArr.push(formData);
        boardObj['data'] = dataArr;
        localStorage.setItem(boardTitle.textContent, JSON.stringify(boardObj));
    }

    alert('작성 완료!');
    window.location.href='file:///C:/netflix-board/html/board.html';
}