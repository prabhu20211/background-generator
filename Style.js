// var database=[
// 	{
// 		username:"fff",
// 		passwd:"fff"
// 	},
// 	{
// 		username:"ttt",
// 		passwd:"kkk"
// 	},
// 	{
// 		username:"ddd",
// 		passwd:"ddd"
// 	}
// ];
// var news=[
// 	{
// username:"fff",
// 		time:"fff"
// 	},
// 	{
// username:"444",
// 		time:"444"
// 	},
// 	{
// username:"333",
// 		time:"333"
// 	}
// ];
// var usernameprompt= prompt("username");
// var passwdprompt= prompt("passwd");

// function valid(user, pass) {
// 	for (var i =0; i<database.length; i++) {

// 		if (database[i].username===user &&
// 			database[i].passwd===pass) {
// 			return true;
// 		} 
// 	}return false;
// }
// function signIn(user, pass) {

// 	if  (valid(user, pass))
// 	{
// 		console.log(news);
// 	}
// 	else
// 	{
// 	alert("wrg username");
// }}

// signIn(usernameprompt,passwdprompt);
var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul= document.querySelector("ul");

function inputLength(){
	return input.value.length
}
function createListElement() {
	
	var li=document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value="";
}
function addListAfterClick() {

	if (input.value.length>0) 
	{
		createListElement();
	}
}
function addListAfterKeypress(event){
if (inputLength()>0 && event.keyCode===13) 	{
	createListElement();
}
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
