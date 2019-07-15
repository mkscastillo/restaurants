import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewReviewComponent } from './new-review/new-review.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
  { path: 'restaurants', component: RestaurantsComponent, children: [
    { path: ':id/edit', component: EditComponent}] 
  },
  { path: 'restaurants/new', component: NewComponent},
  { path: 'restaurants/:id', component: ReviewsComponent},
  { path: 'restaurants/:id/review', component: NewReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
