// Stretch Problems

// createBase seems to return a functions that takes a decimal and adds it to the base int passed into it
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// createBase(takes in an int that will serve as the base)
// should return a function that can take different base 10 ints and convert them

const createBase = function (base) {
	return function (num) {
		return base + num;
	};
};

var addSix = createBase(6);
console.log(addSix(10), addSix(21));
