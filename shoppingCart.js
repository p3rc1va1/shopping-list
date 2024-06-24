
const addBtn = document.querySelector('#add');
const list = document.querySelector('ul');

addBtn.addEventListener("click", ()=>{
    const item = document.querySelector("#item");
    if(item.value==NaN || item.value==""){
        alert("An empty item doesnt make much sense eh?")
    }else{
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.textContent = item.value
    deleteBtn.textContent = "delete"
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);
    list.append(listItem)
    item.value = ""

        deleteBtn.addEventListener("click", ()=>{
            list.removeChild(listItem);
        
        })
    }
        item.focus()
})

