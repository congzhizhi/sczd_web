import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   public config: any = {
    domain: 'http://192.168.0.110:8000/'
  }
  constructor(public http:HttpClient) {
    
   }
    /*
  api/focus  
  */
  ajaxGet(url:String) {

    var api = this.config.domain + url;
    return new Promise((resove, reject) => {

      this.http.get(api).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }

  /*
 api/focus  
 */
  ajaxPost(url:String, json:Object) {
    var api = this.config.domain + url;
    return new Promise((resove, reject) => {
      this.http.post(api, json).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }
 
  
}
