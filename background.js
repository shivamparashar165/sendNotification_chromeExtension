var options = {

    type:"basic",
    title: "GeeksforGeeks Update",
    message: "A new article is published on GeeksforGeeks",
    iconUrl: "gfgicon.png" //icon
};

function myFunction(){
    chrome.notifications.create(options, callback);
}

document.addEventListener('DOMContentLoaded', function() {
    var send = document.getElementById('send');
    // onClick's logic below:
    send.addEventListener('click', function() {
        myFunction();
    });
});

function callback() {
    console.log("Notification Sent");
}