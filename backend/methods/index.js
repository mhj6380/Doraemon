var colors = require("colors");

const serverIntro = () => {
  console.log("************************************************".rainbow.bold);
  console.log("");
  console.log("D O R A E M O N".rainbow.bold); // Drops the bass
  console.log("v 0.1 Boilerplate code".cyan); // Drops the bass
  console.log("");
  console.log("Code By".underline.red);
  console.log("");
  console.log("■    ■     ■     ■   ■   ■■■■■  ■   ■ ".rainbow.bold);
  console.log("■    ■   ■   ■   ■  ■    ■   ■  ■   ■ ".rainbow.bold);
  console.log("■■■■■■   ■ ■ ■   ■■■     ■■■■■  ■   ■ ".rainbow.bold);
  console.log("■    ■   ■   ■   ■  ■        ■  ■   ■ ".rainbow.bold);
  console.log("■    ■   ■   ■   ■   ■   ■■■■■   ■■■  ".rainbow.bold);
  console.log("");
  console.log("************************************************".rainbow.bold);
};

module.exports = {
  serverIntro,
};
