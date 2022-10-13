import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/property-list/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HousingService {
  constructor(private http: HttpClient) {}

  gettAllProperties(SentRellParm: number): Observable<IProperty[]>{

    return this.http.get('data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<IProperty> = [];
        for (const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SentRellParm){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

}
