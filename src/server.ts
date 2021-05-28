import app from './app';

const PORT = 3333;

app.get('/', (req, res) => {
  res.send('Status: Online!');
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Servidor iniciado na porta ${PORT}!`);
});
