import { Component, Input, OnInit }             from '@angular/core';
import { Album }                                from './album';
import { Photo }                                from './photo';
import { PhotoService }                         from './photo.service';
import { User }                                 from './user';


@Component({
    selector: 'album-preview',
    template:
            '<ng-container *ngFor="let photo of photos">'+
                '<li *ngIf="photo.albumId===album.id">'+
                    '<album-preview [album]="album"  [photos]="photos"></album-preview>'+
                '</li>'+
            '</ng-container>'
})


export class AlbumPreviewComponent implements OnInit {
    @Input() photos:Photo[];
    @Input() album:Album;
    
    ngOnInit(){}
}
