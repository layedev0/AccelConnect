import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant.model';

export interface IRestaurantService {
  getRestaurants(): Observable<Restaurant[]>;
}
