//ToDo: MAKE THIS A FACTORY 

import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { ErrorService }            from './error.service';

import { User } from './user';

@Injectable()
export class UserService {
    private usersUrl = 'http://jsonplaceholder.typicode.com/users';  
  
    
    constructor(private http:Http, private errorService:ErrorService){} 
    
    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.errorService.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
}
