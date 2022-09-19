import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Partido } from '../interfaces/partido.interface';
import { ScorebatService } from '../services/scorebat.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  
    videos$: Observable<Partido[]>;

    constructor(
        private scorebatService: ScorebatService,
        public sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.videos$ = this.scorebatService.getPartidos().pipe(
            pluck('response')
        );
    }
}
