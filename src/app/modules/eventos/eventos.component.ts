import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  eventos$ : Observable<any>;

  constructor(db: AngularFirestore) {
    this.eventos$ = db.collection('eventos').valueChanges()

  }

  ngOnInit(): void {
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

  ngAfterViewInit() {
    // Starting ngx-drag-scroll from specified index(3)
    setTimeout(() => {
      this.ds.moveTo(3);
    }, 0);
  }

}
