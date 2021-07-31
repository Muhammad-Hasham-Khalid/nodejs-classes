// How to use events the correct way:
// https://www.freecodecamp.org/news/using-events-in-node-js-the-right-way-fc50c060f23b/

const EventEmitter = require("events");
const emitter = new EventEmitter();

const EVENT_1 = Symbol();

emitter.on(EVENT_1, () => {
  console.log("Event 1 emitted!");
});

// Destructuring docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

emitter.on("😲", (data) => {
  console.log("Emitted by user: " + data.name);
});

function DoSomething() {
  // ....some code
  emitter.emit(EVENT_1);
}

function DoSomethingElse() {
  // ....some code
  emitter.emit("😲", { name: "John Doe" });
}

DoSomething();
DoSomethingElse();
