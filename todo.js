const form = document.querySelector(".js-toDoForm"),
input = form.querySelector("input");
toDoList = document.querySelector(".js-toDoForm");

const TODOS_LS = 'toDos';

function paintToDo(text){
  console.log(text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintToDo(currentValue);
}

function loadTodos()
{
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos === null)
  {

  }else{

  }
}

function init(){
form.addEventListener("submit", handleSumit);
}
