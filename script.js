// Variable goes Here
var strNumber = "";
var number = 0;
var decimal = 1;
var accessTypeNum = true ;
// Event listener
document.getElementById("plus").addEventListener("click",plus)
document.getElementById("minus").addEventListener("click",minus)
document.getElementById("devide").addEventListener("click",devide)
document.getElementById("multiply").addEventListener("click",multiply)
//document.getElementById("rustedmind").addEventListener("mouseover",rustedMind2)
//document.getElementById("rustedmind").addEventListener("mouseout",rustedMind)
// functions goes Here
function typeNum(num){
    var ex= num;
    if(accessTypeNum==true){
        var numberr = num ;
        number=numberr.toString();
        strNumber+= number;
        if(document.getElementById("num").innerHTML=="0"){
            document.getElementById("num").innerHTML=number;}
        else{
            document.getElementById("num").innerHTML+=number;}
    }
    else{
        strNumber = "";
        number = 0;
        decimal = 1;
        accessTypeNum = true ;
        document.getElementById("num").innerHTML="0";
        typeNum(ex);
    }
    
}

function plus(){
    if(document.getElementById("num").innerHTML!="0" &&
    strNumber[strNumber.length-1]!="/" &&
    strNumber[strNumber.length-1]!="*" &&
    strNumber[strNumber.length-1]!="-" &&
    strNumber[strNumber.length-1]!="+" ){
        strNumber+="+";
        document.getElementById("num").innerHTML+="+";
        decimal=1;
        accessTypeNum = true
    }
}
function minus(){
    if(document.getElementById("num").innerHTML!="0" &&
    strNumber[strNumber.length-1]!="/" &&
    strNumber[strNumber.length-1]!="*" &&
    strNumber[strNumber.length-1]!="-" &&
    strNumber[strNumber.length-1]!="+" ){
        strNumber+="-";
        document.getElementById("num").innerHTML+="-";
        decimal=1;
        accessTypeNum = true
    }
}
function multiply(){
    if(document.getElementById("num").innerHTML!="0" &&
    strNumber[strNumber.length-1]!="/" &&
    strNumber[strNumber.length-1]!="*" &&
    strNumber[strNumber.length-1]!="-" &&
    strNumber[strNumber.length-1]!="+" ){
        strNumber+="*";
        document.getElementById("num").innerHTML+="&times";
        decimal=1;
        accessTypeNum = true
    }
}
function devide(){
    if(document.getElementById("num").innerHTML!="0" &&
    strNumber[strNumber.length-1]!="/" &&
    strNumber[strNumber.length-1]!="*" &&
    strNumber[strNumber.length-1]!="-" &&
    strNumber[strNumber.length-1]!="+" ){
        strNumber+="/";
        document.getElementById("num").innerHTML+="&#xF7";
        decimal=1;
        accessTypeNum = true
    }
}function typeDecimal(){
    if(decimal==1){
        strNumber+=".";
        document.getElementById("num").innerHTML +=".";
        decimal=0;
    }
}function equal(){

    document.getElementById('num').innerHTML=eval(strNumber);
    strNumber = eval(strNumber)
    decimal=1;
    accessTypeNum=false;
}
function allClear(){
    var strNumber = ""
    document.getElementById('num').innerHTML="0";
    decimal=1;
}function backSpace(){
    strNumber=strNumber.slice(0,strNumber.length-1)
    document.getElementById('num').innerHTML=document.getElementById('num').innerHTML.slice(
        0,document.getElementById('num').innerHTML.length-1);
    if(document.getElementById('num').innerHTML==""){
        document.getElementById('num').innerHTML="0";}
}/*function rustedMind2(){
    document.getElementById("rustedmind").innerHTML="";
}function rustedMind(){
    document.getElementById("rustedmind").innerHTML="Created by RustedMind";
}*/
/*Notes goes Here 


*/
