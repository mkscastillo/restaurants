import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestaurants(){
    return this._http.get('/restaurants');
  }

  getRestaurant(id:String){
    return this._http.get('/'+id);
  }

  create(data){
    console.log("inside service", data);
    return this._http.post('/create',data);
  }

  delete(id: String){
    return this._http.delete('/delete/'+id);
  }

  update(data){
    console.log("inside service", data);
    return this._http.put('/edit/'+data._id,data);
  }

  create_review(data){
    console.log("inside service", data);
    return this._http.post('/create_review',data);
  }
}
