/**
 * Cette classe représente la vue de notre TODO list
 */
class TodoListView {
  constructor() {}
  /**
   * Met à jour la vue.
   * @param {Array} todoArray un tableau contenant des todos
   */
  update(todoArray) {
    let ul = document.querySelector("ul");
    let todoListElement = document.querySelector("#todoList");
    // on supprime tout les éléments de la liste.
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    // on itère sur le tableau pour afficher chaque todo de la liste
    todoArray.forEach(function(todo, index){
      // on créé tout les éléments HTML qui constituent un todo dans le DOM
      let li = document.createElement("li");
      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      // si la valeur de isDone du todo est à true, on ajoute l'attribut checked à la checkbox
      if (todo.isDone) {
        checkbox.setAttribute("checked", "");        
      }
      // on écoute l'évenement change sur chaque checkbox
      checkbox.addEventListener("change",function(event) {
        // on créé un nouvel évenement nommé "toggleTodo" pour chaque todo,
        // on lui passe en suite l'index du todo dans le tableau.
        // la doc de CustomEvent :
        // https://developer.mozilla.org/fr/docs/Web/API/CustomEvent/CustomEvent
        let customEvent = new CustomEvent('toggleTodo', {detail: index});
        // on déclenche notre évenement sur l'élément d'id todoList
        todoListElement.dispatchEvent(customEvent);
      });

      // on place le texte d'un todo dans leurs éléments HTML respectif
      p.textContent = todo.description;
      h1.textContent = todo.title;
      // ajoute les éléments dans le DOM
      ul.appendChild(li);
      div.appendChild(h1);
      div.appendChild(p);
      li.appendChild(div);
      li.appendChild(checkbox);
    });
  }
}