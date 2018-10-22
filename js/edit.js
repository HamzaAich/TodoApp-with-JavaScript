function update() {
    var sumid = + localStorage.getItem('editId');
    var title = JSON.parse(localStorage.getItem("title"));
    var description = JSON.parse(localStorage.getItem('content'));
    var location = JSON.parse(localStorage.getItem('locations'));
    var date = JSON.parse(localStorage.getItem('date'));
    var updatetitle = title.slice(sumid, sumid + 1);

    var updatedescription = description.slice(sumid, sumid + 1);
    var updatelocation = location.slice(sumid, sumid + 1);
    var updatedate = date.slice(sumid, sumid + 1);
    document.getElementById('title').value = updatetitle;
    document.getElementById('content').value = updatedescription;
    document.getElementById('locations').value = updatelocation;
    document.getElementById('date').value = updatedate;
}

function updatee() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("content").value;
    var location = document.getElementById("locations").value;
    var date = document.getElementById("date").value;


    // document.getElementById("message").innerHTML = "Task Updated Succesfully";
    var sumid = localStorage.getItem('editId');
    var gettitle = JSON.parse(localStorage.getItem("title"));
    var getdescription = JSON.parse(localStorage.getItem('content'));
    var getlocation = JSON.parse(localStorage.getItem('locations'));
    var getdate = JSON.parse(localStorage.getItem('date'));
    gettitle.splice(sumid, 1, title);
    getdescription.splice(sumid, 1, description);
    getlocation.splice(sumid, 1, location);
    getdate.splice(sumid, 1, date);
    localStorage.setItem('title', JSON.stringify(gettitle))
    localStorage.setItem('content', JSON.stringify(getdescription))
    localStorage.setItem('locations', JSON.stringify(getlocation))
    localStorage.setItem('date', JSON.stringify(getdate))
    return true;

} document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});