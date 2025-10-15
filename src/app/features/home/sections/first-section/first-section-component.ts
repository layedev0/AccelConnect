import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppConfig } from '../../../../core/config/app.config';

@Component({
  selector: 'app-first-section-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './first-section-component.html',
  styleUrl: './first-section-component.css',
})
export class FirstSectionComponent implements AfterViewInit {
  chatOpen = false;
  icons = AppConfig.icons;
  iconTitles = AppConfig.iconTitles;
  iconRoutes = AppConfig.iconRoutes;

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoContainer') videoContainer!: ElementRef<HTMLDivElement>;

  isPlaying = false;
  isMuted = true;
  duration = 0;
  currentTime = 0;
  progress = 0;
  currentTimeDisplay = '0:00';
  durationDisplay = '0:00';
  

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    video.muted = true;
    video
      .play()
      .then(() => (this.isPlaying = true))
      .catch((err) => console.warn('Autoplay bloqué:', err));
  }

  togglePlayPause(event: Event): void {
    event.stopPropagation();
    const video = this.heroVideo.nativeElement;

    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  toggleMute(event: Event): void {
    event.stopPropagation();
    const video = this.heroVideo.nativeElement;

    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }

  toggleFullscreen(event: Event): void {
    event.stopPropagation();
    const container = this.videoContainer.nativeElement;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  onTimeUpdate(): void {
    const video = this.heroVideo.nativeElement;
    this.currentTime = video.currentTime;
    this.progress = (this.currentTime / video.duration) * 100;
    this.currentTimeDisplay = this.formatTime(this.currentTime);
  }

  onMetadataLoaded(): void {
    const video = this.heroVideo.nativeElement;
    this.duration = video.duration;
    this.durationDisplay = this.formatTime(video.duration);
  }

  seekVideo(event: MouseEvent): void {
    event.stopPropagation();
    const video = this.heroVideo.nativeElement;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const ratio = clickX / rect.width;
    video.currentTime = ratio * video.duration;
  }

  private formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  toggleChat(): void {
    this.chatOpen = !this.chatOpen;
  }
}
