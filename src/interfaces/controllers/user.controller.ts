import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/useCases/createUser';
import { GetUserUseCase } from '../../application/useCases/getUser';
import { UpdateUserUseCase } from '../../application/useCases/updateUser';
import { DeleteUserUseCase } from '../../application/useCases/deleteUser';
import { InMemoryUserRepository } from '../../infrastructure/persistence/inMemoryUserRepository';
import { UserDTO } from '../../application/dtos/user.dto';
import { GetAllUsersUseCase } from '../../application/useCases/getAllUsersUseCase';

const userRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getUserUseCase = new GetUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

export class UserController {
    async createUser(req: Request, res: Response): Promise<void> {
        const userData: UserDTO = req.body;
        try {
            const user = await createUserUseCase.execute(userData);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        const userId: string = req.params.id;
        
        try {
            const user = await getUserUseCase.execute(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        
        try {
            const users = await getAllUsersUseCase.execute();
            if (users.length !== 0) {
                res.status(200).json(users);
            } else {
                res.status(404).json({ message: 'No users found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        const userId: string = req.params.id;
        const userData: UserDTO = req.body;
        try {
            const user = await updateUserUseCase.execute(userId, userData);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        const userId: string = req.params.id;
        try {
            const deleted = await deleteUserUseCase.execute(userId);
            if (deleted) {
                res.status(204).end();
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
