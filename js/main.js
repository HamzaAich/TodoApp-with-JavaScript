window.onload = function () {
    if ("UserName" in localStorage) {
        userArray = new Array;
        var username = localStorage.getItem('UserName');
        if (username !== null) {
            userArray = JSON.parse(username);
        }
        document.getElementById('username').innerHTML = "Hello <b>" + userArray + "</b>";
        if (userArray === null) {
            localStorage.setItem('UserName', JSON.stringify("Guest"));
            location.reload();
        }
    } else {
        var newName = prompt('Please Enter Your Name');
        if (newName == '') {
            location.reload();
            return false;
        } else {
            localStorage.setItem('UserName', JSON.stringify(newName));
            location.reload();
        }
    }
}

function preloader() {
    document.getElementById('preloader-content').style.display = "none";
    document.getElementById('preloader-content1').style.display = "block";
    setTimeout(function () { clearStorage(); }, 3000);
}


function clearStorage() {
    localStorage.clear();
    setTimeout(function () { location.reload(); }, 500);

}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});

