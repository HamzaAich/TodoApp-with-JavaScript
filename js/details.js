function details() {
    var CompleteID = + localStorage.getItem('editId');
    var title = JSON.parse(localStorage.getItem("title"));
    var description = JSON.parse(localStorage.getItem('content'));
    var location = JSON.parse(localStorage.getItem('locations'));
    var date = JSON.parse(localStorage.getItem('date'));
    var CompleteTodoTitle = title.slice(CompleteID, CompleteID + 1);

    var CompleteTodoContent = description.slice(CompleteID, CompleteID + 1);
    var CompleteTodoLocation = location.slice(CompleteID, CompleteID + 1);
    var CompleteTodoDate = date.slice(CompleteID, CompleteID + 1);
    document.getElementById('title').innerHTML = CompleteTodoTitle;
    document.getElementById('content').innerHTML = CompleteTodoContent;
    document.getElementById('locations').innerHTML = CompleteTodoLocation;
    document.getElementById('date').innerHTML = CompleteTodoDate;
}

done.onclick = function () {
    var CompleteID = + localStorage.getItem('editId');

    // task done
    var title = JSON.parse(localStorage.getItem("title"));
    var content = JSON.parse(localStorage.getItem('content'));
    var locations = JSON.parse(localStorage.getItem('locations'));
    var date = JSON.parse(localStorage.getItem('date'));

    var CompleteTodoTitle = title.splice(CompleteID, 1);
    var CompleteTodoContent = content.splice(CompleteID, 1);
    var CompleteTodoLocation = locations.splice(CompleteID, 1);
    var CompleteTodoDate = date.splice(CompleteID, 1);

    var CompleteTitle = CompleteTodoTitle[0];
    var CompleteContent = CompleteTodoContent[0];
    var CompleteLocations = CompleteTodoLocation[0];
    var CompleteDate = CompleteTodoDate[0];

    localStorage.setItem('title', JSON.stringify(title));
    localStorage.setItem('content', JSON.stringify(content));
    localStorage.setItem('locations', JSON.stringify(locations));
    localStorage.setItem('date', JSON.stringify(date));

    // creating new localstorage values
    var completeTitle = localStorage.getItem('CompleteTodoTitle');
    var completeContent = localStorage.getItem('CompleteTodoContent');
    var completeLocations = localStorage.getItem('CompleteTodoLocations');
    var completeDate = localStorage.getItem('CompleteTodoDate');

    // storing title in localstorage
    if (completeTitle == null || completeContent == null || completeLocations == null || completeDate == null ) {
        CompleTodoTitle = [];
        CompleTodoContent = [];
        CompleTodoLocation = [];
        CompleTodoDate = [];
    }
    else {
        CompleTodoTitle = JSON.parse(completeTitle);
        CompleTodoContent = JSON.parse(completeContent);
        CompleTodoLocation = JSON.parse(completeLocations);
        CompleTodoDate = JSON.parse(completeDate);
    }
    CompleTodoTitle.push(CompleteTitle);
    CompleTodoContent.push(CompleteContent);
    CompleTodoLocation.push(CompleteLocations);
    CompleTodoDate.push(CompleteDate);

    localStorage.setItem('CompleteTodoTitle', JSON.stringify(CompleTodoTitle));
    localStorage.setItem('CompleteTodoContent', JSON.stringify(CompleTodoContent));
    localStorage.setItem('CompleteTodoLocations', JSON.stringify(CompleTodoLocation));
    localStorage.setItem('CompleteTodoDate', JSON.stringify(CompleTodoDate));

    window.location.href = "complete.html";
}
window.onload= details();