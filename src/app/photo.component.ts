import { Component, OnInit, Input } from '@angular/core';
import { Photo }                    from './photo';

@Component({
  selector: 'a-photo',
  template: '<img src={{photo.url}}>'
})


export class PhotoComponent implements OnInit{
    @Input() photo:Photo;
    ngOnInit(){}
}
