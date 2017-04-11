import { 
    Component,
    OnInit,
    Injectable
}                           from '@angular/core';

import { UserService }      from './user.service';
import { User }             from './user';

import { AlbumService }      from './album.service';
import { Album }             from './album';

import { PhotoService }      from './photo.service';
import { Photo }             from './photo';

@Injectable()
@Component({
    selector: 'user-list',
    template: 
            '<ul>'+
                '<li *ngFor="let user of users">'+
                    '<a-user '+
                        '[user]="user" '+
                        '[albums]="albums" '+
                        '[photos]="photos" >'+
                    '</a-user>'+
                '</li>'+
            '</ul>'
    ,
    styleUrls: ['./app.component.css']
})

export class UserListComponent implements OnInit {
    users: User[]; 
    albums:Album[];
    photos:Photo[];
    
    errorMessage:any;
    
    constructor(
            private userService: UserService, 
            private albumService:AlbumService,
            private photoService:PhotoService        
            ) { }
    
    ngOnInit() { 
        this.getUsers();
        this.getAlbums();
        this.getPhotos();
    }
         
    getUsers(){
        this.userService.getUsers()
                        .then(
                            response => this.users = response,
                            error =>  this.errorMessage= <any>error);
    }
    
    getAlbums(){
        this.albumService.getAlbums()
                        .then(
                            response => this.albums = response,
                            error =>  this.errorMessage= <any>error);
    }
    
    getPhotos(){
        this.photoService.getPhotos()
                        .then(
                            response => this.photos = response,
                            error =>  this.errorMessage = <any>error);
    }
}
