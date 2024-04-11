import { User } from '../../domain/models/user';
import { UserRepository } from '../../domain/repositories/user.repository';

let users: User[] = [];

export class InMemoryUserRepository implements UserRepository {

    async createUser(user: User): Promise<User> {
        users.push(user);
        return user;
    }

    async getUserById(userId: string): Promise<User | null> {
        return users.find(user => user.id === userId) || null;
    }

    getAllUsers(): Promise<User[]> {
        return Promise.resolve(users);
    }

    async updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
        const index = users.findIndex(user => user.id === userId);
        if (index !== -1) {
            users[index] = { ...users[index], ...userData };
            return users[index];
        }
        return null;
    }

    async deleteUser(userId: string): Promise<boolean> {
        const initialLength = users.length;
        users = users.filter(user => user.id !== userId);
        return initialLength !== users.length;
    }
}
