import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) {

  }

  queryData(params: any = {}): Promise<any> {
    return this.http.get('https://www.slated.com/films/autocomplete/profiles/?' + this.serialize(params)).toPromise();
  }

  serialize(obj: any): string {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
}
