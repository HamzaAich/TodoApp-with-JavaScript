

function remove() {

    var id = this.getAttribute('id');
    var todos = new Array;
    var todos1 = new Array;
    var todos2 = new Array;
    var todos3 = new Array;

    var todos_str = localStorage.getItem('title');
    var todos_str1 = localStorage.getItem('content');
    var todos_str2 = localStorage.getItem('locations');
    var todos_str3 = localStorage.getItem('date');

    if (todos_str !== null || todos_str1 !== null || todos_str2 !== null || todos_str3 !== null) {
        todos = JSON.parse(todos_str);
        todos1 = JSON.parse(todos_str1);
        todos2 = JSON.parse(todos_str2);
        todos3 = JSON.parse(todos_str3);
    }

    todos.splice(id, 1);
    todos1.splice(id, 1);
    todos2.splice(id, 1);
    todos3.splice(id, 1);

    localStorage.setItem('title', JSON.stringify(todos));
    localStorage.setItem('content', JSON.stringify(todos1));
    localStorage.setItem('locations', JSON.stringify(todos2));
    localStorage.setItem('date', JSON.stringify(todos3));

    M.toast({ html: 'ToDo Removed from List' });
    setTimeout(function () { location.href = 'index.html'; }, 700);
    return false;
}

function show() {
    var todos = new Array;
    var todos1 = new Array;
    var todos2 = new Array;
    var todos3 = new Array;
    var todos_str = localStorage.getItem('title');
    var todos_str1 = localStorage.getItem('content');
    var todos_str2 = localStorage.getItem('locations');
    var todos_str3 = localStorage.getItem('date');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
        todos1 = JSON.parse(todos_str1);
        todos2 = JSON.parse(todos_str2);
        todos3 = JSON.parse(todos_str3);
    }

    if (!todos_str || todos_str == null || todos_str == '') {
        var mainError = document.getElementById('result');
        var errorDiv = document.createElement('div');

        errorDiv.classList.add('noItems')
        var text = document.createTextNode('You Have No ToDo');
        errorDiv.appendChild(text);
        mainError.appendChild(errorDiv);
    } else {
        var html = '<div>';
        for (var i = 0; i < todos.length; i++) {
            html += '<div class="todo-main"><div class="todo-body"><i>' + todos3[i] + '</i><br><i data-position="top" data-tooltip="Click to Complete ToDo" class="tooltipped detailBtn material-icons" id="' + i + '"  style="cursor:pointer;">check_box_outline_blank</i><div class="todo-text" id="' + i + '"><span class="todo-title" style="font-weight:740;">' + todos[i] + '</span><br> ' + todos1[i] + '</div><div class="todo-btnContainer" id="' + i + '"><span class="todo-btn"><button class="editBtn" id="' + i + '"><i class="material-icons" style="vertical-align: middle;">edit</i></button><button class="remove" style="margin: 3px;" id="' + i + '"><i class="material-icons" style="vertical-align: middle;">clear</i></button></span></div></div></div>';
        };
        html += '</div>';

        document.getElementById('result').innerHTML = html;

        var buttons = document.getElementsByClassName('remove');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', remove);
        };
        var editBtn = document.getElementsByClassName('editBtn');
        for (var i = 0; i < editBtn.length; i++) {
            editBtn[i].addEventListener('click', up);
        };
        var ComplBtn = document.getElementsByClassName('detailBtn');
        for (var i = 0; i < ComplBtn.length; i++) {
            ComplBtn[i].addEventListener('click', completeTask);
        };

        function up() {
            var sum = this.getAttribute('id');
            localStorage.setItem('editId', sum);
            location.href = "edit.html";
        }
        function completeTask() {
            var sum = this.getAttribute('id');
            localStorage.setItem('editId', sum);
            location.href = "details.html";
        }
    }


}
show()