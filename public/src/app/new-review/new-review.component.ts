import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  review: any;
  msg_error: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.msg_error = "";
    this.review = {author:"", stars: 5, review: ""}
  }

  create(){
    this._route.params.subscribe((params: Params) => {
      if(this.review.author.length < 3){
        this.msg_error = "Name field must be 3 characters or more. ";
      }
      if(this.review.review.length < 3){
        this.msg_error += "Review field must be 3 characters or more. ";
      }
      if(this.review.author.length >= 3 && this.review.review.length >= 3){
        let obs = this._httpService.create_review({id:params['id'], review: this.review});
        obs.subscribe(data => {
          console.log(data);
          if(data['error']){
            this.msg_error = data['error'].message;
          } else {
            this._router.navigate(['/restaurants/'+params['id']]);
          }
        });
      }
    });
  }

  cancel(){
    this._route.params.subscribe((params: Params) => {
      this._router.navigate(['/restaurants/'+params['id']]);
    });
  }

}
