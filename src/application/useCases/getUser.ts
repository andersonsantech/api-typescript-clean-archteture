import { User } from '../../domain/models/user';
import { UserRepository } from '../../domain/repositories/user.repository';

export class GetUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(userId: string): Promise<User | null> {
        return this.userRepository.getUserById(userId);
    }
}