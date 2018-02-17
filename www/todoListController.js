"use strict";
/**
 * Cette classe représente le controleur de notre application.
 */
class TodoListController {
  constructor() {
    // on créé une vue et un modèle.
    this.view = new TodoListView;
    this.model = new TodoListModel;
    // astuce permettant de garder l'accès à this dans le contexte de l'eventListener.
    let _this = this;
    // on récupère le formulaire afin d'accéder aux valeurs des inputs.
    let form = document.querySelector("#todoList form");
    // on écoute l'évenement submit du formulaire
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let title = document.querySelector("#todoList input[name=title]");
      let description = document.querySelector("#todoList input[name=description]");
      // on créer un nouveau todo à partir des valeurs des inputs.
      let newTodo = new TodoModel(title.value, description.value);
      // on ajoute le nouveau todo dans la liste
      _this.model.add(newTodo);
      // on réinitialise le formulaire (comportement normal d'un formulaire)
      form.reset();
      // on met à jour la vue à partir du tableau de todos présent dans notre instance de TodoListModel
      _this.view.update(_this.model.all);
    });
    // on récupère l'élément HTML représentant le bouton de suppression
    let deleteBtn = document.querySelector("#todoList form input[type=button]");
    // on écoute l'évenement click sur le bouton
    deleteBtn.addEventListener('click', function (event) {
      // on s'assure que le bouton ne submit pas le formulaire (sur certains navigateurs, un input de type button va submit le formulaire)
      event.preventDefault();
      // on enlève les todos terminés de la liste
      _this.model.delete();
      // on met à jour la vue à partir du tableau de todo
      _this.view.update(_this.model.all);
    });
    // on récupère la section d'id todoList
    let todoListElement = document.querySelector("#todoList");
    // on écoute l'évenement personalisé toggleTodo créé dans la vue
    todoListElement.addEventListener("toggleTodo", function(event){
      // on bascule l'état du todo. Pour le retrouver dans le tableau all de la todolist,
      // on se base sur la valeur event.detail que la vue nous à envoyé à travers l'évenement
      _this.model.all[event.detail].toggle();
    });
  }
}