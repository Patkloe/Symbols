const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of chess board`;
};

console.log([1, 2, 3, 4, 5][toStringSymbol]());
