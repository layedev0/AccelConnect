import { Component, OnInit, signal } from '@angular/core';
import { RestaurantService } from '../../services/impl/restaurant.service';
import { Restaurant } from '../../model/restaurant.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-restaurant',
  imports: [RouterLink],
  templateUrl: './liste-restaurant.html',
  styleUrl: './liste-restaurant.css',
})
export class ListeRestaurant implements OnInit {
  constructor(private readonly restaurantService: RestaurantService) {}

  restaurants = signal<Restaurant[]>([]);
  totalRestaurants = signal<number>(0);

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: (data) => {
        this.restaurants.set(data);
        this.totalRestaurants.set(data.length);
      },
      error: (error) => console.error(error),
    });
  }
}
