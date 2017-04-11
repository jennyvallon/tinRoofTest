import { Component, OnInit, Input, ViewContainerRef}          from '@angular/core';
import { Photo }                            from './photo';
import { User }                             from './user';
import { Album }                            from './album';


@Component({
    selector: 'a-user',
    template: '<p>{{user.name}}</p>'+
            '<album-list [user]="user" [albums]="albums" [photos]="photos"></album-list>'
})


export class UserComponent implements OnInit {
    @Input() user:User;
    @Input() albums:Album[];
    @Input() photos:Photo[];
  
    constructor(public viewContainerRef: ViewContainerRef){  }
    
    ngOnInit(){ 
        
    }
}
