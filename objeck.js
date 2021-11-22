
let cekSubmit = document.getElementById("formInput"),
getValue = document.getElementById("addTask"),
getTitle = document.getElementById("title"),
sendResult = document.getElementById("showResult"),
todoList = [];

showNow();


//objeck list
class Mytodo {
    constructor (todo, title, id) {
        this.todoId = id
        this.todoName = todo;
        this.todoTitle = title;
        this.todoCheck = false;
    }

    checkDelButton () {
        if (this.todoCheck === "check" || this.todoCheck === "add") {
            if (this.todoCheck === true) {
                this.todoCheck = false;
            }else {
                this.todoCheck = true;
            }
            showResult();
        } else if (this.todoCheck === "del") {
            myList.splice(this.todoId,1);
            showResult();
        }
    }

    showMe () {
        let show = "";
        if (this.todoCheck === false) {
            show = `
                <div class="listResult" title="${this.todoTitle}">
                    <div class="check" id="${this.todoId}"></div>
                    <div class="del" id="${this.todoId}"></div>
                    <div class="valueLis">
                    ${this.todoName.toUpperCase()}</div>
                </div>
                `
        }else {
            show = `
                <div class="listResult markCheck" title="${this.todoTitle}">
                    <div class="add" id="${this.todoId}"></div>
                    <div class="del" id="${this.todoId}"></div>
                    <div class="valueLis" >
                    ${this.todoName.toUpperCase()}</div>
                </div>
                `;
        }

        return show;
    }
};

//show list
function showNow() {
    let show = "";
    
    for (x in todoList) {
        show += todoList[x].showMe();
    }

    sendResult.innerHTML = show;
}

//add todo
cekSubmit.addEventListener("submit", (e) =>{
    e.preventDefault();

    const todo = getValue.value;
    const title = getTitle.value;
    const index = todoList.length;
    todoList.push();
    todoList[index] = new Mytodo(todo, title, index);

    showNow();

    getValue.value = "";
    getTitle.value = "";
    console.table(todoList);
})

//click check del
sendResult.addEventListener("click", (e) => {

    e.preventDefault();
    const id = Number(e.target.id);
    if (e.target.className === "check") {
        todoList[id].todoCheck = true;
    } else if  (e.target.className === "del"){
        todoList.splice(id,1);
        console.log("target del :", typeof id);
    }
    showNow();
})

