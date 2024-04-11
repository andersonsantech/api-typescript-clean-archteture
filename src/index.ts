import express from 'express';
import userRouter from '../src/interfaces/routes/user.routes';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middleware para processar o corpo das requisições
app.use(express.json());

// Roteador para os endpoints relacionados aos usuários
app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});