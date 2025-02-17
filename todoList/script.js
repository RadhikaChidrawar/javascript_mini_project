const inputBox = document.querySelector('#inputBox');
const listCont = document.querySelector('#list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="&#x2715;";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

listCont.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listCont.innerHTML);
}
function showList(){
    listCont.innerHTML = localStorage.getItem("data") || "";
}
showList();