var input = document.getElementById("input");
var listContainer = document.getElementById("list-container");
var p = document.getElementById("p");
function btn() {
    var listItem = document.createElement('li');
    listItem.innerHTML = input.value + '<button onclick="remove(event)">Delete</button>';
    listContainer.append(listItem)
    if(input.value == ""){
        alert("please enter any in the input tag");
        listContainer.remove()
    }
    
}

function remove(event){
      event.target.parentElement.remove()
} 


