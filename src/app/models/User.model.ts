export class User {

    constructor(public firstName: string,
                public lastname: string,
                public email: string,
                public drinkPreferences: string,
                public hobbies?: string[]) {}
}
