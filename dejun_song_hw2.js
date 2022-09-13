/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const double = (arr) => {
  let newArr = [];
  arr.map((item) => {
    newArr.push({ quantity: item.quantity * 2, price: item.price * 2 });
  });
  return newArr;
};
// console.log(double(itemsObject))
const filter = (arr) => {
  let newArr = arr.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
  return newArr;
};
// console.log(filter(itemsObject))

const total = (arr) => {
  let sum = arr
    .map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);
  return sum;
};
// console.log(total(itemsObject))

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const trimStr = (str) =>
  str
    .split(/\W/)
    .filter((str) => str != "")
    .join(" ")
    .toLocaleLowerCase();
// console.log(trimStr(string) === expectedReturnString);
/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const combine = (arr1, arr2) => {
  let newArr = [...arr1];
  // merge two objArrays
  let idList = [];
  for (elem of newArr) {
    idList.push(Object.values(elem)[0]);
    elem["role"] = null;
  }
  for (elem of arr2) {
    let idIndex = idList.indexOf(elem.uuid);
    if (idIndex !== -1) {
      newArr[idIndex]["role"] = Object.values(elem)[1];
    } else {
      elem["name"] = null;
      newArr.push(elem);
    }
  }
  // sort merged objArray
  newArr
    .map((elem) =>
      Object.keys(elem)
        .sort()
        .reverse()
        .reduce((acc, key) => {
          acc[key] = elem[key];
          return acc;
        }, {})
    )
    .sort((a, b) => a.uuid - b.uuid);
  return newArr;
};

console.log(combine(first, second));
