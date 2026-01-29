console.log("Moltsystem initialized...");

const texts = [
  "Initializing AI agents...",
  "Connecting to digital network...",
  "System evolving...",
];

let i = 0;
setInterval(() => {
  console.log(texts[i % texts.length]);
  i++;
}, 2000);
