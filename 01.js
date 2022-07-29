const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if(this.head === null) return false;
  let current = this.head;
  let value = [];
  while(current !== null) {
    value.push(current.value);
    current = current.next;
  }
  value = value.sort(function(a, b) {return a - b}).reverse();
  this.head = null;
  for(let i = 0; i < value.length; i++) {
    this.add(value[i]);
  }
  return this;

};
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};