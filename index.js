var h = document.createElement("h1");
var a = document.getElementsByClassName("abbu")[0];
var div_1 = document.getElementsByClassName("heading")[0];
var z = document.getElementsByTagName("body")[0];

div_1.appendChild(h);
heading_name = document.createTextNode("TODO APP");
h.appendChild(heading_name);

function creater(strng) {
  return document.createElement(strng);
}
function push_tag(parents, child) {
  return parents.appendChild(child);
}
function input_creater(type, name) {
  var input = document.createElement("input");
  input.type = type;
  input.name = name;
  return input;
}

let i = input_creater("text", "holder");
push_tag(a, i);
push_tag(a, creater("button"));
let divUl = creater("ul");
push_tag(a, divUl);

var btn = document.getElementsByTagName("button")[0];
btn.id = "but";
btn.innerHTML = "+";

btn.onclick = chalo;
function chalo() {
  let box = input_creater("checkbox", "pagal");
  var liNew = creater("li");
  liNew.innerHTML = i.value;
  i.value = "";
  var btn_2 = creater("button");
  btn_2.innerHTML = "delete";
  btn_2.id += "del";
  
  push_tag(divUl, liNew);
  push_tag(liNew, btn_2);
  push_tag(liNew, box);
  
  box.onclick = function() {
    liNew.style.textDecoration = "line-through";
  };
  
  btn_2.onclick = function() {
    divUl.removeChild(liNew);
  };
}


h.id += "h1";
div_1.className = "div_1";
z.id = "baap";
divUl.id += "input_dec";
i.id += "input_dec";
