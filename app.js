//variable/huvisagch
var name = "(-_-)";
// number, string, boolen, undfined, null
// cocnsole.log() hevleh
// alert();
// +promt("") --> garaas toon utge avah
// +, -, /, *, % -->operator
//if, else --> hervee buyu nuhtsul shalgah uyd
var age = 14;
// >, <, <=, >=, ==;
// &&-and  
if(age>18 && age<30){
	console.log("ider nas");
}else if (age<=3 && age>=0){
	console.log("nylh huuhed");
}else if (age<18 && age>10){
	console.log("zaluu huuhed");
}else{
	console.log("nasand huregu");
}

//var too;
//too = 8;
//if(too % 2 == 0){
	//console.log("tegsh too");
//}else {
	//console.log("sondgoi too");
//}


//var too2;
//too2 = -4;
//if(too2>=0){
	//console.log("eyreg too");
//}else{
	//console.log("surug too")
//}

//switch-nuhtsul shalgah
var today = 6;
switch(today){
	case 1:
	    console.log("monday");
		break;
	case 2 :
	    console.log("tuesday");
		break;
	case 3 :
	    console.log("wednesday");
		break;
	case 4:
	    console.log("thursday");
		break;
	case 5:
	    console.log("friday");
		break;
	case 6:
	    console.log("saturday");
		break;
	default:
	    console.log("not found");
		break;
}
var lang = "korean";
switch(lang){
	case "english":
	    console.log("hello");
	    break;
	case "mongolia":
	    console.log("sain bnu");
	    break;
	case "spanish":
	    console.log("hola");
	    break;
	    case "korean":
	    console.log("안녕");
	default:
	    console.log("not found");
	    break;
}
// 1. too1 garaas too avna
// 2. garaas operator(+ - * /)
// 3. too2 = garaas too avna
// 4. alert deer bodoj gargaj irne
var too1 = +prompt("too 1 oruulna uu");
var op = prompt("(+,-,*,/) oruulna uu");
var too2 = +prompt("too 2 oruulna uu");
switch(op){
	case "+":
	    alert(too1+too2);
		break;
	case "-":
	    alert(too1-too2);
		break;
	case "*":
	    alert(too1*too2);
		break;
	case "/":
	    alert(too1/too2);
		break;
	default:
	    alert("not found");
		break;
}

