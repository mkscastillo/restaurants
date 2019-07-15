import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  restaurant: any;
  msg_error: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.restaurant = {name: "", cuisine: ""};
    this.msg_error = "";
  }

  create(){ 
    let obs = this._httpService.create(this.restaurant);
    obs.subscribe(data => {
      console.log(data);
      if(data['error']){
        this.msg_error = data['error'].message;
      } else {
        this.restaurant = {name: "", cuisine: ""};
        this._router.navigate(['/restaurants']);
      }
    })
  }

  cancel(){
    this._router.navigate(['/restaurants']);
  }

}
