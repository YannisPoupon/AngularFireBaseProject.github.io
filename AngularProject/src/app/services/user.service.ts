import { User } from "../models/User.model";
import { Subject } from 'rxjs';

export class UserService {
    private users : User[] = [
        {
            firstName : 'toto',
            lastName : 'tata',
            email : 'toto@tata.com',
            drinkPreference : 'fresh orange juice',
            hobbies : [
                'Le code',
                'Les ampoules de vestibul'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUser() {
        this.userSubject.next(this.users.slice());
    }

    addUser ( user : User ) {
        this.users.push(user);
        this.emitUser();
    }
} 