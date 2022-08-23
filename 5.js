let days=["First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelth",
"Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth","Twentieth","Twentyfirst",
"Twentysecond","Twentythird","Twentyfourth","Twentyfifth","Twentysixth","Twentyseventh","Twentyeighth","Twentyninth",
"Thirtieth","Thirtyfirst"];
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let yr="Two thousand and twenty-two";
let dt=new Date();
let date=days[dt.getDate()-1];
let month=months[dt.getMonth()];
let year=dt.getFullYear();
alert("Current Date Number : "+dt.getDate());
alert("Current Month Number : "+(dt.getMonth()+1));
if(year==2022){
    alert("Current Date : "+date+" "+month+" "+yr);
}else{
    alert("Current Date : "+date+" "+month+" "+year);
}