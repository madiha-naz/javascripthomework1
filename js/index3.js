var name = "madiha";
var maths = 50;
var english  = 50;
var islamiat = 50;
var physics = 50;
var urdu = 50;
var science = 50;
var computer = 50;
var totalNumber = 700;
var obtained  = maths + english + islamiat + physics + urdu + science + computer;
var per = (obtained / totalNumber) * 100;
var result = "";


if (per >= 40) {
    result = "pass";
} else {
    result = "fail";
}



var grade ="";
if(per >= 80){
    grade ="A+";
}else if(per>=70 && per < 80){
    grade="A";
}

else if(per>=60 && per < 70){
    grade="B";
}
else if(per>=50 && per < 60){
    grade="C";
}
else if(per>=40 && per < 50){
    grade="D";
}
else {
    grade = "F";
}
document.write(`name: ${name} <br> maths:${maths}<br> english: ${english} <br> islamiat: ${islamiat} <br> physics: ${physics} urdu: ${urdu} <br>science: ${science} <br> computer: ${computer} <br>totalnumber:${totalNumber}<br> obtain number: ${obtained}<br> percentage ${per.toFixed(2)} <br>result:${result}<br> grade: ${grade}<br><br><br><br> `);
var leapYear=2009;
var isLeapYear ="";
if((leapYear % 4  === 0 && leapYear % 100   !== 0)||leapYear % 400===0
){
   document.write( isLeapYear="leap:true","<br>");
}
else{
      document.write( isLeapYear="LEAP YEAR :false","<br>");
}
 var numb="3";
 if (numb%2===0){
    document.write("the condition is even")
 }
else{
    document.write("the condition is odd<br>")
}
var num="2";
 if (num%2===0){
    document.write("the condition is even<br>")
 }
else{
    document.write("the condition is odd")
}var number="0";
 if (number%2===0){
    document.write("the condition is even<br>")
 }
else{
    document.write("the condition is odd")
};
var userDashBoard="admin";
if (userDashBoard === "admin"){
    document.write("this is admin dashboard<br>")
}
else{
 document.write("this is not  admin dashboard<br>")
}
var userDashBoard="noadmin";
if (userDashBoard === "admin"){
    document.write("this is admin dashboard<br>")
}
else{
 document.write("this is not  admin dashboard<br>")
}