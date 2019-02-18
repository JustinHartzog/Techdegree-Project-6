const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static("public"));

const about = require('./routes/about');
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use('/project', projectRoutes);
app.get('/about', about);

app.use((req, res, next) => {
  const err = new Error('not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
  console.log('the application is running on localhost:3000!');
});
