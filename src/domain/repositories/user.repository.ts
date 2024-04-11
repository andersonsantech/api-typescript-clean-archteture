import { User } from '../models/user';

export interface UserRepository {
    createUser(user: User): Promise<User>;
    getUserById(userId: string): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    updateUser(userId: string, userData: Partial<User>): Promise<User | null>;
    deleteUser(userId: string): Promise<boolean>;
}