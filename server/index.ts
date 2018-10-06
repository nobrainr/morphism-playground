import * as express from 'express';
import * as next from 'next';
// import { parse } from 'url';
// import { join } from 'path';
// import { existsSync } from 'fs';
import { join } from 'path';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const getMonacoFilePath = fileName =>
  !dev ? join(__dirname, '../server', `/${fileName}`) : join(__dirname, '../.next/server', `/${fileName}`);
app.prepare().then(() => {
  const server = express();
  const monacoFiles = ['editor.worker.js', 'typescript.worker.js', 'json.worker.js'];
  monacoFiles.forEach(fileName => {
    server.use(`/${fileName}`, express.static(getMonacoFilePath(fileName)));
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
