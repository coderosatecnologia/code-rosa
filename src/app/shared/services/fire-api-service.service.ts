import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireApiServiceService {

  constructor(public db : AngularFirestore) { }

  getCollection<T>(collectionName: string) : Observable<T[]>{
    return this.db.collection<T>(collectionName).valueChanges();
  }

  getCollectionItem<T>(collection:string,property: string, searchItem: string){
    return this.db
      .collection<T>(collection, ref => ref.where(property, '==', searchItem))
      .valueChanges()
  }

  getDocument(path: string){
    //path: /integrantes/w8pRhaLBjqGsMCjlfOoj
    return this.db.doc(path).valueChanges()
  }
}
