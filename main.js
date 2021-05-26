//search(start)
function search()
{
    if(document.getElementById("search").value=="")return;
    else 
    {
        let searchId = document.getElementById("search").value;
        let site = 'https://www.google.com/search?q='+searchId;
        window.open(site,'_self');
    }
}

document.addEventListener("keydown", function(event) 
{
    if (event.code === 'Enter' || event.code == 13) {
        search();
    }
});
//search(end)

//Date(start)
function dateSetter()
{
    setInterval(function(){ 
        var dt = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("date").innerHTML = (dt.getDate()<10?"0"+dt.getDate():dt.getDate())+"/"+(dt.getMonth()+1<10?"0"+(dt.getMonth()+1):dt.getMonth()+1)+"/"+dt.getFullYear()+" "+days[dt.getDay()];
        document.getElementById("time").innerHTML = (dt.getHours()<10?"0"+dt.getHours():dt.getHours())+":"+(dt.getMinutes()<10?"0"+dt.getMinutes():dt.getMinutes())+":"+(dt.getSeconds()<10?"0"+dt.getSeconds():dt.getSeconds());
    }, 1000);
}
//Date(end)

//Weather Solutions(Start)

function getLocation() 
{
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(showPosition);
    else
        alert("Geolocation is not supported by this browser.");
}
  
function showPosition(position) 
{
    let lat =  parseFloat(position.coords.latitude).toFixed(3); 
    let lon =  parseFloat(position.coords.longitude).toFixed(3);
    var key = 'dbc41817c36a9f883678126b5d7c90f3';
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawWeather(data);
        console.log(data);
    })
    .catch(function() {
        // catch any errors
    });
}

function drawWeather( d ) 
{
	var celcius = Math.round(parseFloat(d.main.temp).toFixed(2)-273.15);
	document.getElementById('temp').innerHTML = celcius + '&deg; C';
	document.getElementById('location').innerHTML = d.name;
    document.getElementById('description').innerHTML = d.weather[0].description;
}

//Weather Solutions(End)