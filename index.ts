console.log("Hello via Bun!");

const server = Bun.serve({
  port: 8890,
  fetch(req) {
    const body = req.body;
    return new Response(body + " - Buming +++");
  },
});

console.log("Bun console center activated!");
console.log(`Localhost server running on port ${server.port}`);
