var boardTitle = document.getElementsByClassName('board-title')[0];
var boardNo = document.getElementsByClassName('board-number');
var writeBtn = document.getElementById('write_btn');
var boardObj = {};

try {
    boardObj = JSON.parse(localStorage.getItem(boardTitle.textContent));
    sessionStorage.setItem("boardNo", boardObj.data.length);

    makeTable(boardObj.data);    
} catch(error) {
    sessionStorage.setItem("boardNo", 0);
}

function makeTable(boards) {
    var table = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];

    for (var i=0; i<boards.length; i++) {
        var board = boards[i];

        var row = table.insertRow();

        var noCell = row.insertCell();
        var titleCell = row.insertCell();
        var dateCell = row.insertCell();
        var viewCewll = row.insertCell();

        noCell.innerText = board.boardNo;
        titleCell.className = 'td-title';
        if (board.spoiler==='1') {
            titleCell.innerHTML = '<span style="color:red;">(스포)</span> ' + board.title;
        } else {
            titleCell.innerHTML = board.title;
        }
        dateCell.innerText = board.date;
        viewCewll.innerText = board.view;

        titleCell.onclick = function() {
            var clicked = Number(this.previousSibling.textContent);
            boards[clicked-1].view = Number(boards[clicked-1].view) + 1;
            boardObj.data = boards;
            localStorage.setItem(boardTitle.textContent, JSON.stringify(boardObj));
            sessionStorage.setItem('details', JSON.stringify(boards[clicked-1]));
            window.location.href='file:///C:/netflix-board/html/boardDetails.html';
        }
    }
}
                    
writeBtn.onclick = function() {
    window.location.href='file:///C:/netflix-board/html/writing.html';
}