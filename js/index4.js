var day="sunday";
switch (day){
    case"monday":
    document.write("weekday")
    break;
case"wednesday":
document.write("weekday")
break;
case"thursday":
document.write("weekday")
break;
case"friday":
document.write("weekday")
break;
case"tuesday":
document.write("weekday")
break;
default:
document.write("NOT A WEEKDAY<br>")
break;

}

var resgisteremail="madihanaz@gmail.com"
var resgisterpass="madihanaz123"
var confirmpass="madihanaz123"
var loginemail="madihanaz@gmail.com"
var loginpass="madihanaz123"
if (confirmpass===resgisterpass){
    document.write("you have succesfully register<br>");
}
else{
    document.write("incorrect password<br>");
}
if(loginemail==resgisteremail && loginpass==resgisterpass){
    document.write("you have logedin your account<br>");

}
else{
    document.write("please use the same login info you have used for registeration");
}
var unitConsumed="200";
var totalBill;
if (unitConsumed<=500){
totalBill = unitConsumed * 5;
document.write("if unit consumed is less then 200 then the answer will be    :", totalBill)
}else if(unitConsumed<=200){
totalBill = unitConsumed * 8;
document.write("if unit consumed is greater then 200 then the answer will be   " ,totalBill)
}else{
    document.write("Invalid: unit consumption exceeds 200");
}

