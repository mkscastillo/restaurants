import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(){
    let obs = this._httpService.getRestaurants();
    obs.subscribe(data => {
      this.restaurants = data['restaurants'];
    })
  }

  delete(id: String){
    let obs = this._httpService.delete(id);
    obs.subscribe(data => {
      this.getRestaurants();
    });
  }
}
