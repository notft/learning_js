let todolist = [];

let pulled = '';

function pull(){
    pulled = document.querySelector(".js-input");
    todolist.push(pulled);
    console.log(pulled);
}

function render(){
    let x = todolist.length;
    
    for(let i = 0; i<x ; i++){
        /*document.querySelector(".js-div").innerText() = `<p>${todolist[i]}</p>`;*/
        
    }
        
}

while (true){
    pull();
    render();
};