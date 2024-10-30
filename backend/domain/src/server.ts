import express, { Request, Response } from 'express';
import routes from './routes/routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/app', routes);

app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`)
});