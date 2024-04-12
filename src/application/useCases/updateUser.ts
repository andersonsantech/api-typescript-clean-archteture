import { User } from '../../domain/models/user';
import { UserRepository } from '../../domain/repositories/user.repository';

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(userId: string, user: User): Promise<User | null> {
        return this.userRepository.updateUser(userId, user);
    }
}