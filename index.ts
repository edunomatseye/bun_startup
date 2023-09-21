import figlet from "figlet";

console.log("Hello via Bun!");

const server = Bun.serve({
  port: 8890,
  fetch(req) {
    const body = figlet.textSync("Bum bum !");
    return new Response(body + " - Buming +++");
  },
});

console.log("Bun console center activated!");
console.log(`Localhost server running on port ${server.port}`);

const hash = await Bun.password.hash("A very strong password");
const hasAccess = await Bun.password.verify("A very strong password", hash);

const access = hasAccess ? "Login" : "Logout";
console.log(access);
