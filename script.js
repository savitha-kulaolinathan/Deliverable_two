var rainFall = prompt("How many inches of Rain fell?");
var fertiliz;
var fertilizType;
var produce=50;
var input = new Boolean(true);
if (isNaN(rainFall)) //Validate rainfall input is numeric or not
{
    alert("Please enter valid number!")
    input = false;
} else // This code will execute only  if rainfall is numeric and it asks for fertilizer usuage
{
    for (var word = ''; word.length < rainFall; word += '*') { }
    console.log(word);
    fertiliz = prompt("Did you use fertilizer?");
}
if (input == true) //Execute below code only if rainfall is numeric
{
    if (fertiliz == "yes") {
        fertilizType = prompt("Did you use regular or premium fertilizer?");
    }
    //Calculate produce based on rainfall
    if (rainFall >= 20) {
        produce = produce*0.9;
    }
    else if (rainFall < 10) {
        produce = produce*0.8;
    }
    else {
        produce = 50;
    }
    //Update produce based on fertilizer type  & print it in console
    if (fertiliz == "yes" && fertilizType == "regular") {
        produce = produce*1.1;
        console.log('The yield should be ' + produce.toFixed(2) + ' bushels per acre');
    } else if (fertiliz == "yes" && fertilizType == "premium") {
        produce = produce*1.15;
        console.log('The yield should be ' + produce.toFixed(2) + ' bushels per acre');
    }
    else if (fertiliz == "no") {
        produce=produce*1;
        console.log('The yield should be ' + produce.toFixed(2) + ' bushels per acre');
    }
   
    
}


