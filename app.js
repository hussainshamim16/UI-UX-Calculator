
var result = document.getElementById("result");

function liveScreen(printNumbers){
    result.value += printNumbers;
}

function calculate(value) {
    var calculatedValue = eval(value);
    result.value = calculatedValue;
    }
    
 function clearValue(value){
    result.value  = ""
 }
