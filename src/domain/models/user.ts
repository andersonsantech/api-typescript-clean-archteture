import { v4 as uuidv4 } from 'uuid';

export class User {
    constructor(
        public id: string | null,
        public name: string,
        public email: string,
        public age: number
    ) {}

    public generateUUID(){
        this.id = uuidv4();
    }
}