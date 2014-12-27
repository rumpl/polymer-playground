(function (document) {
  'use strict';

  document.addEventListener('polymer-ready', function () {
    var element = document.querySelector('todo-list');
    element.items = [{ title : "tellos" }, { title: "aloha"}];
  });
  
})(wrap(document));
