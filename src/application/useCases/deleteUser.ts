import { UserRepository } from '../../domain/repositories/user.repository';

export class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(userId: string): Promise<boolean> {
        return this.userRepository.deleteUser(userId);
    }
}