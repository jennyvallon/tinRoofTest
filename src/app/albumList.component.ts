import { Component, Input, OnInit }             from '@angular/core';
import { User }                                 from './user';
import { Album }                                from './album';
import { Photo }                                from './photo';

@Component({
    selector: 'album-list',
    template: '<ul> Their Albums:' +
                '<ng-container *ngFor="let album of albums">'+
                    '<li *ngIf="album.userId===user.id">'+
                        '<album-preview [album]="album"  [photos]="photos">{{album.title}}</album-preview>'+
                    '</li>'+
                '</ng-container>'+
            '</ul>'
})


export class AlbumListComponent implements OnInit {
    @Input() albums:Album[];
    @Input() user:User;
    @Input() photos:Photo[];
  
    //this component should be hidden on init
    //this should toggle show/hide when clicked
    
   
    
    ngOnInit(){ 
       
       
    }
    
   
}
