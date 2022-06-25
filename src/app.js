import "bootstrap";
import "./style.css";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let item = ["my computer", "my homework", "my saxophone", "my car"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function onLoad(whoArray, whatArray, itemArray, whenArray) {
  let randomWho = whoArray[Math.floor(Math.random() * whoArray.length)];
  let randomWhat = whatArray[Math.floor(Math.random() * whatArray.length)];
  let randomItem = itemArray[Math.floor(Math.random() * itemArray.length)];
  let randomWhen = whenArray[Math.floor(Math.random() * whenArray.length)];

  let answer =
    "OMG! I'm so sorry... but " +
    randomWho +
    " " +
    randomWhat +
    " " +
    randomItem +
    " " +
    randomWhen +
    " ";

  return answer;
}
document.getElementById("excuse").innerHTML = onLoad(who, what, item, when);
