import { User } from "../../domain/models/user";

export type userProps = {
    name: string;
    email: string;
    age: number;
};


export class UserDTO {
    constructor(
        public name: string,
        public email: string,
        public age: number
    ) {}

    public static newInstance(data: userProps): UserDTO {
        return new UserDTO(data.name, data.email, data.age);
    }

    public toUser(id: string | null = null): User {
        if(id !== null){
            return new User(id, this.name, this.email, this.age);
        }
        return new User(null, this.name, this.email, this.age);
    }
}