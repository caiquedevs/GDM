import express from 'express';

const app = express();

app.get('/', (request, response) =>
  response.json({
    message: 'Meu server Express, Typescript e ESLint!',
  })
);

app.listen(3333, () => {
  console.log('🚀 Server started on http://localhost:3333');
});
