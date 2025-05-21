import express from 'express';
import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Cria um novo filme a partir do titulo
app.post('/movies', async (req, res) => {
  const { title } = req.body;

  await prisma.movie.create({
    data: {
      title: title,
    },
  });

  res.status(201).json(req.body);
});

// Busca todos os filmes da tabela
app.get('/movies', async (req, res) => {
  const movies = await prisma.movie.findMany();

  res.status(200).json(movies);
});

// Antiga atualização de posição.
/* app.patch('/movies/:id', async (req, res) => {
  const movieAId = req.params.id;
  const { targetId } = req.body;

  const [movieA, movieB] = await prisma.movie.findMany({
    where: {id: { in: [movieAId, targetId] }},
  })

  await prisma.$transaction([
    prisma.movie.update({
      where: { id: movieAId },
      data: { position: movieB.position }
    }),
    prisma.movie.update({
      where: { id: targetId },
      data: { position: movieA.position }
    })
  ])

  res.status(200).json({message: "Posições trocadas com sucesso!"});
}) */

// Deleta um filme a partir do id
app.delete('/movies/:id', async (req, res) => {
  const movieId = req.params.id;

  await prisma.movie.delete({
    where: { id: movieId }
  })

  res.status(200).json({message: "Filme deletado com sucesso!"});
})

app.listen(3000);
