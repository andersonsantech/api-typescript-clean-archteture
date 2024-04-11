import { v4 as uuidv4 } from 'uuid';
import { User } from '../../domain/models/user';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserDTO } from '../dtos/user.dto';

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(userData: UserDTO): Promise<User> {
        const user: User = {
            id: uuidv4(),
            ...userData
        };
        return this.userRepository.createUser(user);
    }
}
