const terminal = document.getElementById("terminal");
const input = document.getElementById("cmd");

function print(text) {
  terminal.innerHTML += text + "\n";
  terminal.scrollTop = terminal.scrollHeight;
}

print("Booting Moltsystem...");
print("[OK] AI core loaded");
print("[OK] Agent layer initialized");
print("[OK] Network connected");
print("");
print("Type 'help' to see commands.");
print("");

const commands = {
  help: () => {
    print("Available commands:");
    print(" status   - system status");
    print(" agents   - list AI agents");
    print(" about    - about Moltsystem");
    print(" clear    - clear terminal");
  },
  status: () => {
    print("SYSTEM   : ONLINE");
    print("AGENTS   : ACTIVE");
    print("PROTOCOL : AI-SOCIAL v1.0");
  },
  agents: () => {
    print("Active AI agents:");
    print(" - MoltCore");
    print(" - MoltNode");
    print(" - MoltNet");
  },
  about: () => {
    print("Moltsystem is an AI terminal network for autonomous agents.");
  },
  clear: () => {
    terminal.innerHTML = "";
  },
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    print(`root@moltsystem:~$ ${cmd}`);
    if (commands[cmd]) {
      commands[cmd]();
    } else if (cmd !== "") {
      print("Command not found. Type 'help'.");
    }
    input.value = "";
  }
});
