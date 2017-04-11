import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { ErrorService }            from './error.service';

import 'rxjs/add/operator/toPromise';

import { Photo } from './photo';
 
@Injectable()
export class PhotoService {
    private photosUrl = 'http://jsonplaceholder.typicode.com/photos';  
    
    constructor(private http:Http, private errorService:ErrorService){} 
    
    getPhotos(): Promise<Photo[]> {
        return this.http.get(this.photosUrl)
               .toPromise()
               .then(this.extractData)
               .catch(this.errorService.handleError);
    }
    
    getAlbumPhotos(albumId:number, photos:Photo[]) {
        
        console.log()
        let photosInAlbum:Photo[];
        
        for(let i=0; i<photos.length; i++){
            if (photos[i].albumId===albumId){
                photosInAlbum.push(photos[i]);
            }
        }
        return photosInAlbum;
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
}