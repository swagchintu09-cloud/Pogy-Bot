import { spawn } from "node:child_process";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const dashboardDir = process.cwd();

function run(label, args, cwd) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(npmCommand, args, {
      cwd,
      stdio: "inherit",
      shell: process.platform === "win32"
    });

    child.on("exit", (code) => {
      if (code === 0) resolveRun();
      else rejectRun(new Error(`${label} failed with code ${code}`));
    });
  });
}

await run("Zenith UI build", ["run", "build:client"], dashboardDir);
