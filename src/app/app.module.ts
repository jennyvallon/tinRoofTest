import { BrowserModule }            from '@angular/platform-browser';
import { 
    NgModule, 
    CUSTOM_ELEMENTS_SCHEMA 
}                                   from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { UserService }              from './user.service';
import { PhotoService }             from './photo.service';
import { AlbumService }             from './album.service';
import { ErrorService }             from './error.service';

import { UserListComponent }        from './userList.component';
import { AlbumListComponent }       from './albumList.component';

import { AlbumPreviewComponent }    from './albumPreview.component';

import { UserComponent }            from './user.component';
import { PhotoComponent }           from './photo.component'; 
import { RootComponent }            from './root.component';


@NgModule({
    declarations: [
        RootComponent,
        UserListComponent,
        UserComponent,
        AlbumListComponent,
//        AlbumPreviewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers:[UserService, PhotoService, AlbumService,ErrorService],
    bootstrap: [RootComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { } 
