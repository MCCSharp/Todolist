import { TodoList } from "./Components/TodoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try{

    // const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const todoInStorage = localStorage.getItem('todos')?.toString()
    let todos=[]
    if(todoInStorage){
        todos = JSON.parse(todoInStorage)
    }
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))

}catch(e){
    const alertElement = createElement('div', {
        class:'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = 'Loading element not possible'
    document.body.prepend(alertElement)
    console.error(e)
}