import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  galerias$: Observable<any>;


  constructor(db: AngularFirestore) {
    this.galerias$ = db.collection('galeria').valueChanges()

  }

  ngOnInit(): void {

}

}
