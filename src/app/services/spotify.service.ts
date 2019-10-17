import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { }

  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD6pghzjwx4R88Ss1NBszub8bTGYvIlDt9kuFZaOEtAP_bX6KOggPGBi45eFkw8LAip4-r2_V5PP5fKSFA'
    });

    return this.http.get(url, {headers});
  }


  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items));
  }

  getArtista( termino:string ){
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe( map( data => data['artists'].items ));  
  }


}
