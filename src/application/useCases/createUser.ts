import { User } from "../../domain/models/user";
import { UserRepository } from "../../domain/repositories/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }
}
