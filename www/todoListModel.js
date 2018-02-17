"use strict";
/**
 * Cette classe représente la todo list.
 */
class TodoListModel {
  /**
   * Initialise une todo list vide.
   */
  constructor() {
    this.all = [];
  }
  /**
   * Ajoute un todo dans la liste.
   * @param {TodoModel} todo Le todo à ajouter dans la todo list.
   */
  add(todo) {
    // on pousse le nouveau todo dans la liste
    this.all.push(todo);
  }
  /**
   * Retire de la liste les todos terminés
   */
  delete() {
    // pour chaque todo de notre todo list
    for (let i = 0; i < this.all.length; i++) {
      // si la propriété isDone est vraie, on retire le todo du tableau
      if (this.all[i].isDone) {
        this.all.splice(i, 1);
        // /!\ lorsqu'on retire un todo du tableau, on décrémente l'index pour ne pas sauter d'élément
        i--;
      }
    }
  }
}
