import { User } from "../../domain/models/user";
import { UserRepository } from "../../domain/repositories/user.repository";


export class GetAllUsersUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<User[]> {
        return this.userRepository.getAllUsers();
    }
}