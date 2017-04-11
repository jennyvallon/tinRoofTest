import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { ErrorService }            from './error.service';


import { Album } from './album';

@Injectable()
export class AlbumService {
    private albumsUrl = 'http://jsonplaceholder.typicode.com/albums';  
    
    constructor(private http:Http, private errorService:ErrorService){} 
    
    getAlbums(): Promise<Album[]> {
        return this.http.get(this.albumsUrl)
                   .toPromise()
                   .then(this.extractData)
                   .catch(this.errorService.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
}