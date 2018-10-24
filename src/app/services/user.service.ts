import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    userSubject = new Subject<User[]>();

    private users: User[] = [
        {
            firstName: 'James',
            lastname: 'Smith',
            email: 'james@smith.com',
            drinkPreferences: 'Coca',
            hobbies: [
                'Coder',
                'Jeux Vidéo',
                'Boire du Café'
            ]
        }
    ];

    constructor (private httpClient: HttpClient) {}


    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }

    saveUserToServer() {
        this.httpClient
        .put('https://http-client-demo-f32c0.firebaseio.com/users.json', this.users)
        .subscribe(
            () => {
                console.log('Utilisateur enregistré');
            },
            (error) => {
                console.log('Erreur dans la sauvegarde' + error);
            }
        );
    }

    getUsersFormServer() {
        this.httpClient
        .get<any[]>('https://http-client-demo-f32c0.firebaseio.com/users.json')
        .subscribe(
            (response) => {
                this.users = response;
                this.emitUsers();
                console.log('Lecture DB users');
            },
            (error) => {
                console.log('Une erreur est survenue' + error);
            }
        );
    }
}
