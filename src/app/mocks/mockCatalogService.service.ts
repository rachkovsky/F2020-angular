import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MockCatalogService {

    getMenSlides(): Observable<any> {
        return of([    {
            id: "1",
            name:"T-shirt",
            price: 30
          },
          {
            id: "2",
            price:10,
            name:"Ololo"
          }
        ]);
    }

    getWomenSlides(): Observable<any> {
        return of([    {
            id: "1",
            name:"T-shirt",
            price: 30
          },
          {
            id: "2",
            price:10,
            name:"Ololo"
          }
        ]);
    }

}