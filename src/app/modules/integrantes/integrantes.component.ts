import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DragScrollComponent } from 'ngx-drag-scroll';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})


export class IntegrantesComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;


  integrantes$: Observable<any>;

  constructor(db: AngularFirestore) {
    this.integrantes$ = db.collection('integrantes').valueChanges()

  }

  ngOnInit() {
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
