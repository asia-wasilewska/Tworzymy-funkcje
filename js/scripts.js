function getTriangleArea(a, h) {
  if(a <= 0 || h <= 0) {
    return('Nieprawidłowe dane');
	}
  else {
    return(a*h/2);
	}
};

console.log( getTriangleArea(10, 6) );

var triangle1Area = getTriangleArea(4, 3);
var triangle2Area = getTriangleArea(12, 2);
var triangle3Area = getTriangleArea(0, 10);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);