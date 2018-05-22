//References to tbody, input field, and search button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

//event listener on search button
$searchBtn.addEventListener("click", function(){alert("Hello World")});


//set filteredSightings to sightingsData
var filteredSightings = sightingsData;

//function for table
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredSightings.length; i++) {
        var sighting = filteredSightings[i];
        var fields = Object.keys(sighting);
        var $row = $tbody.insertRow(i);
        for (var s = 0; s < fields.length; s++) {
            var field = fields[s];
            var $cell = $row.insertCell(s);
            $cell.innerText = sighting[field];
        }
    }
}

function executeSearchButton(){
    var filteredDate = $dateInput.value.trim();

    filteredSightings = sightingsData.filter(function(sighting){
       var sightingData = sighting.datetime();
       return sightingData === filteredDate; 
    });
    renderTable();
}

renderTable();