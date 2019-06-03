const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});
