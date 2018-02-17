"use strict";
/**
 * Cette classe représente un todo.
 */
class TodoModel {
  /**
   * @param {String} title Titre du todo.
   * @param {String} description Description du todo.
   * @param {Boolean} isDone État du todo, vrai lorsqu'il est terminé (optionnel).
   */
  constructor(title, description, isDone = false) {
    this.title = title;
    this.description = description;
    this.isDone = isDone;
  }
  /**
   * Méthode pour inverser l'état du todo.
   * @returns {Boolean} l'état du todo.
   */
  toggle() {
    // on inverse la valeur de isDone
    this.isDone = !this.isDone;
    // on retourne isDone
    return this.isDone;
  }
}