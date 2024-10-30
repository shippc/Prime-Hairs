import { Request, Response } from 'express';
import { listUsers } from '../service/user-service';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = listUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar usuários', error });
    }
};
