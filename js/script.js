var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

var removeItem = function (array, item) {
  stuff.splice(7, 1, "rainbows");
  console.log(item);
  console.log(stuff);
  if (stuff[7] === null) {
    console.log("No such element exists in the array.");
  }
};

removeItem(stuff, "coffee");
removeItem(stuff, "books");

//stuff.forEach(function (item, index) {
// if (index % 2 === 0) {
//  console.log(item);
//}
//});
