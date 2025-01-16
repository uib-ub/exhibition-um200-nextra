import charm from "charm";

function log(
  string,
  color = "blue",
  options = { bright: false, dim: false, underscore: false }
) {
  const ch = charm();
  ch.pipe(process.stdout);

  if (options?.bright) ch.display("bright");
  if (options?.dim) ch.display("dim");
  if (options?.underscore) ch.display("underscore");

  ch.foreground(color).write(string).display("reset");
  ch.end();
}

function logResponse(string, response, success = true) {
  if (success) {
    log(`✓ `, "yellow", { dim: true });
    log(`${string}`, "yellow");
    log(` ➜ ${response.status}\n`, "yellow", { dim: true });
  } else {
    log(`✗ `, "red", { dim: true });
    log(`${string}`, "red");
    log(` ➜ ${response.status}\n`, "red", { dim: true });
  }
}

export { log, logResponse };
