import express from 'express';
const minify = require('express-minify-html-2');
import getData from './lib/getData';

const app = express();
const port = process.env.PORT || 3005;
const defaultID = process.env.DEFID || 'default';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(
  minify({
    override: true,
    exception_url: false,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      minifyJS: true,
    },
  }),
);

app.get('/', (req, res) => {
  let info = getData(defaultID);
  res.render('../views/someone.ejs', {
    info: info,
  });
});

app.get('/:id', (req, res) => {
  let info = getData(req.params.id);
  res.render('../views/someone.ejs', {
    info: info,
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
