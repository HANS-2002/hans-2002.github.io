function search()
{
    let searchId = document.getElementById("search").value;
    let site = 'https://www.google.com/search?q='+searchId;
    window.open(site,'_self');
}

document.addEventListener("keydown", function(event) 
    {
        if (event.code === 'Enter') {
            search();
        }
    });

function startDictation() 
{
    if (window.hasOwnProperty('webkitSpeechRecognition')) 
    {
        var recognition = new webkitSpeechRecognition();
        continuous = false;
        interimResults = false;
        lang = "en-US";
        start();
        onresult = function(e) {
            getElementById('search').value = e.results[0][0].transcript;
            stop();
        };
        onerror = function(e) {
            stop();
        };
    }
}

function dateSetter()
{
    setInterval(function(){ 
        var dt = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("date").innerHTML = (dt.getDate()<10?"0"+dt.getDate():dt.getDate())+"/"+(dt.getMonth()+1<10?"0"+(dt.getMonth()+1):dt.getMonth()+1)+"/"+dt.getFullYear()+" "+days[dt.getDay()];
        document.getElementById("time").innerHTML = (dt.getHours()<10?"0"+dt.getHours():dt.getHours())+":"+(dt.getMinutes()<10?"0"+dt.getMinutes():dt.getMinutes())+":"+(dt.getSeconds()<10?"0"+dt.getSeconds():dt.getSeconds());
    }, 1000);
}