let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  arr.forEach(a => a.profession == 'developer' ? console.log(a) : '');
}

function addData() {
  //Write your code here, just console.log
  let obj = {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let newArray = arr.filter(a => a.profession != 'admin');
  console.log(newArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: 'Alex', age: 12, profession: 'Builder' },
    { id: 5, name: 'Susan', age: 30, profession: 'Architect' },
    { id: 6, name: 'Berlin', age: 17, profession: 'Theif' },
  ];

  arr = arr.concat(arr2);

  console.log(arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
