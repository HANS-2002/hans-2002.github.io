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