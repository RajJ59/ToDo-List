const list = document.getElementById("list");
const form1 = document.getElementById('form1');
const btn = document.getElementById('btn');


form1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btn").click();
    }
  });


addTask = () => {
    if (form1.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = form1.value;
        list.appendChild(li);
        let span = document.createElement("button");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    form1.value = '';
};

list.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="BUTTON"){
        e.target.parentElement.remove();
    }
}, false);
