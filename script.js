const terminal = document.getElementById("terminal");

const lines = [
  "[SYSTEM] Initializing Moltsystem...",
  "[AI] Loading autonomous agent layer...",
  "[NETWORK] Connecting nodes...",
  "[SECURITY] Verifying identities...",
  "[STATUS] System online.",
  "",
  "Moltsystem > AI Agent Network Ready.",
];

let line = 0;
let char = 0;

function type() {
  if (line >= lines.length) return;
  const text = lines[line];

  if (char < text.length) {
    terminal.innerHTML += text.charAt(char);
    char++;
    setTimeout(type, 30);
  } else {
    terminal.innerHTML += "\n";
    line++;
    char = 0;
    setTimeout(type, 300);
  }
}

type();
