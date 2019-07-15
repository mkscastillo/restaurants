import { Component, OnInit} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  restaurant: any;
  msg_error: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.msg_error = "";
    this._route.params.subscribe((params: Params) => {
      let obs = this._httpService.getRestaurant(params['id']);
      obs.subscribe(data => {
        this.restaurant = data['restaurant'];
      });
    });
  }

  update(id:String){
    console.log(this.restaurant);
    if(this.restaurant.name.length < 3 || this.restaurant.cuisine.length < 3){
      this.msg_error += "Name field must be 3 characters or more. Cuisine field must be 3 characters or more.";
    }
    else {
      let obs = this._httpService.update(this.restaurant);
      obs.subscribe(data => {
        this._router.navigate(['']);
      }); 
    }
  }
}
