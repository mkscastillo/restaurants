import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  restaurant: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      let obs = this._httpService.getRestaurant(params['id']);
      obs.subscribe(data => {
        this.restaurant = data['restaurant'];
        console.log(this.restaurant);
      });
    });
  }

}
