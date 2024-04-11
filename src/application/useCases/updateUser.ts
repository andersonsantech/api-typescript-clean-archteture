import { User } from '../../domain/models/user';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserDTO } from '../dtos/user.dto';

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(userId: string, userData: UserDTO): Promise<User | null> {
        return this.userRepository.updateUser(userId, userData);
    }
}