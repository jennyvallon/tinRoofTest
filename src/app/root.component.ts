import { Component, OnInit}                           from '@angular/core';
        

@Component({
    selector: 'app-root',
    template: '<h1>Users</h1>'+
            '<user-list></user-list>',
  styleUrls: ['./app.component.css']
})

export class RootComponent implements OnInit{ 

    ngOnInit(){

    }
}
