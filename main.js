// // function fun1() {
// //   let p = new Promise(function (resolve) {
// //     resolve("data hi there");
// //   });
// //   return p;
// // }

// // function onData(data) {
// //   console.log(data);
// // }

// // function fun2() {
// //   fun1().then(function (value) {
// //     console.log(value);
// //   });
// //   // console.log(p);
// // }
// // fun2();

// function myOwnSetTimeOut(duration) {
//   let p = new Promise(function (resolve) {
//     setTimeout(resolve, 1000);
//   });
//   return p;
// }

// myOwnSetTimeOut(1000).then(function () {
//   console.log("log the first thing");
// });
// console.log("hi");
// const counter = document.getElementById("counter");

// let count = 0;
// function updateCounter() {
//   count = count + 1;
//   console.log(count);
// }

// setInterval(updateCounter, 1000);

// let count = 0;
// function updateCounter() {
//   count++;
//   console.log(count);
//   setTimeout(updateCounter, 1000);
// }
// updateCounter();
// const fs = require("fs");
// console.log("hello world1");
// fs.readFile("a.text", "utf-8", function (err, data) {
//   // console.log("hello world2");
//   data = data + "my name is rishabh jain";
//   fs.writeFile();
//   console.log("hello world3");
// });
// const fs = require("fs");
// const content = "This is the content that will be written to the file.";
// fs.writeFile("a.txt", content, (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("Content has been written to the file successfully.");
//   }
// });
// function wait(n) {
//   let p = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, n * 1000);
//   });
//   return p;
// }
// var duration = 2;
// async function value() {
//   await wait(duration);
//   console.log("done");
// }
// value();

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {}

function wait3(t) {}

function calculateTime(t1, t2, t3) {}
