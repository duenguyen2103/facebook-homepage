var days = ['Day'];
for(var i = 1; i<=31; i++){
    days.push(i);
}
var months = ['Month','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var years =  ['Year'];
for(var j = 1900; j<=2019; j++){
    years.push(j);
}


var generateDays = function(){
    days.forEach(function(day){
        var option = document.createElement('option');
        option.innerHTML += day;
        document.getElementById('calendar-days').appendChild(option);
    })
    return;
}

var generateMonths = function(){
    months.forEach(function(month){
        var option = document.createElement('option');
        option.innerHTML += month;
        document.getElementById('calendar-months').appendChild(option);
    })
    return;
}

var generateYears = function(){
    years.forEach(function(year){
        var option = document.createElement('option');
        option.innerHTML += year;
        document.getElementById('calendar-years').appendChild(option);
    
    })
    return;
}

var alertInputInformation = function(){
    var formValue = document.getElementById('signup-input');
    console.log(formValue.elements);
    var alertText = "";
    for(var i = 0; i< formValue.length-1; i++){ 
        if(formValue.elements[i].type == "radio"&&formValue.elements[i].checked == false){
            continue;
        }
        var text =  formValue.elements[i].name + ": " + formValue.elements[i].value + '\n';
        alertText += text;

    };
    alert(alertText);
}



