import 'dotenv/config';
import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

// if production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(PORT, () => {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});
