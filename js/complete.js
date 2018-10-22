// Remove Todo From localStorage with Specific ID
function remove() {
    var id = this.getAttribute('id');
    var todos = new Array;
    var todos1 = new Array;
    var todos2 = new Array;
    var todos3 = new Array;

    var todos_str = localStorage.getItem('CompleteTodoTitle');
    var todos_str1 = localStorage.getItem('CompleteTodoContent');
    var todos_str2 = localStorage.getItem('CompleteTodoLocations');
    var todos_str3 = localStorage.getItem('CompleteTodoDate');

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

    localStorage.setItem('CompleteTodoTitle', JSON.stringify(todos));
    localStorage.setItem('CompleteTodoContent', JSON.stringify(todos1));
    localStorage.setItem('CompleteTodoLocations', JSON.stringify(todos2));
    localStorage.setItem('CompleteTodoDate', JSON.stringify(todos3));

    M.toast({ html: 'ToDo Removed from List' });
    setTimeout(function () { location.href = 'index.html'; }, 700);
    return false;
}

// Get Todos from localStorage and SHow Them on Homepage
function show() {
    var todos = new Array;
    var todos_str = localStorage.getItem('CompleteTodoTitle');
    var todos_str1 = localStorage.getItem('CompleteTodoContent');
    var todos_str2 = localStorage.getItem('CompleteTodoLocations');
    var todos_str3 = localStorage.getItem('CompleteTodoDate');

    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
        todos1 = JSON.parse(todos_str1);
        todos2 = JSON.parse(todos_str2);
        todos3 = JSON.parse(todos_str3);
    }

    if (!todos_str || todos_str === null || todos_str === '') {
        var mainError = document.getElementById('result');
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('noItems')
        var text = document.createTextNode('You Have No Complete ToDo');
        errorDiv.appendChild(text);
        mainError.appendChild(errorDiv);
    } else {
        var html = '<div>';
        for (var i = 0; i < todos.length; i++) {
            html += '<div class="todo-main"><div class="todo-body"><i>' + todos3[i] + '</i><br><i  class=" material-icons" id="' + i + '"  style="vertical-align: baseline;">check_box</i><div class="todo-text" id="' + i + '"><span class="todo-title" style="font-weight:740;">' + todos[i] + '</span><br> ' + todos1[i] + '</div><div class="todo-btnContainer" id="' + i + '"><span class="todo-btn"><button class="remove completeDel" id="' + i + '"><i class="material-icons" style="vertical-align: middle;">clear</i></button></span></div></div></div>';
        };
        html += '</div>';
        document.getElementById('result').innerHTML = html;
        var buttons = document.getElementsByClassName('remove');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', remove);
        };

    }
}

show()