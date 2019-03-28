var days = ['Day'];
for(var i = 1; i<=31; i++){
    days.push(i);
}
var months = ['Month','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var years =  ['Year'];
for(var j = 1900; j<=2019; j++){
    years.push(j);
}

var generateOptions = function(array){
    for(var i = 0; i<=array.length; i++){
        
    }
}

var generateDays = function(){
    days.forEach(function(day){
        var option = document.createElement('option');
        option.innerHTML += day;
        document.getElementById('calendar-days').appendChild(option);
    })
}

var generateMonths = function(){
    months.forEach(function(month){
        var option = document.createElement('option');
        option.innerHTML += month;
        document.getElementById('calendar-months').appendChild(option);
    })
}

var generateYears = function(){
    years.forEach(function(year){
        var option = document.createElement('option');
        option.innerHTML += year;
        document.getElementById('calendar-years').appendChild(option);
        
    })
}



