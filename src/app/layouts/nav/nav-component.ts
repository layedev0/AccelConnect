import { Component } from '@angular/core';
import { AppConfig } from '../../core/config/app.config';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-component.html',
  styleUrl: './nav-component.css',
})
export class NavComponent {
  logoUrl = AppConfig.logoUrl;
  avatarUrl = AppConfig.defaultAvatar;
}
