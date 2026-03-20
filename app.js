const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #0f172a;
      color: #e2e8f0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container { text-align: center; }
    h1 { font-size: 2.5rem; font-weight: 700; color: #f8fafc; margin-bottom: 0.75rem; }
    p { color: #94a3b8; font-size: 1.1rem; }
    .badge {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: #065f46; color: #6ee7b7;
      font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
      padding: 0.35rem 1rem; border-radius: 9999px; margin-bottom: 1.5rem;
    }
    .dot {
      width: 8px; height: 8px; background: #34d399; border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="badge"><span class="dot"></span> Running</div>
    <h1>Hello, World!</h1>
    <p>Node.js sample app is up and running on port ${PORT}.</p>
  </div>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
