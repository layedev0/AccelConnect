import { Component, inject, OnInit, signal } from '@angular/core';
import { PlatService } from '../../services/impl/plat.service';
import { Meal } from '../../model/plat.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list-plat-component',
  imports: [RouterLink],
  templateUrl: './list-plat-component.html',
  styleUrl: './list-plat-component.css',
})
export class ListPlatComponent implements OnInit {
  private readonly platService = inject(PlatService);

  plats = signal<Meal[]>([]);
  totalPlats = signal<number>(0);

  ngOnInit(): void {
    this.platService.getPlats().subscribe({
      next: (data) => {
        this.plats.set(data);
        this.totalPlats.set(data.length);
      },
      error: (error) => console.error(error),
    });
  }
}
