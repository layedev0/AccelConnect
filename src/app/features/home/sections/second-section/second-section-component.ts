import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Birthday {
  id?: string;
  name: string;
  date: Date;
  avatar?: string;
}

@Component({
  selector: 'app-second-section-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-section-component.html',
  styleUrl: './second-section-component.css',
})
export class SecondSectionComponent implements OnInit {
  // Calendrier
  readonly now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth() + 1;
  selectedDay: number | null = this.now.getDate();
  monthName = new Date(this.year, this.month - 1, 1).toLocaleString('fr-FR', { month: 'long' });
  readonly weekDays = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
  calendarCells: Array<number | null> = [];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const firstWeekday = new Date(this.year, this.month - 1, 1).getDay();
    const daysInMonth = new Date(this.year, this.month, 0).getDate();

    this.calendarCells = [
      ...Array(firstWeekday).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    while (this.calendarCells.length % 7 !== 0) {
      this.calendarCells.push(null);
    }
  }

  prevMonth(): void {
    if (this.month === 1) {
      this.year--;
      this.month = 12;
    } else {
      this.month--;
    }
    this.updateCalendar();
  }

  nextMonth(): void {
    if (this.month === 12) {
      this.year++;
      this.month = 1;
    } else {
      this.month++;
    }
    this.updateCalendar();
  }

  private updateCalendar(): void {
    this.monthName = new Date(this.year, this.month - 1, 1).toLocaleString('fr-FR', {
      month: 'long',
    });
    this.generateCalendar();
    this.selectedDay =
      this.year === this.now.getFullYear() && this.month === this.now.getMonth() + 1
        ? this.now.getDate()
        : null;
  }

  selectDay(day: number | null): void {
    if (day) {
      this.selectedDay = day;
      console.log('Jour sélectionné:', day);
    }
  }

  isToday(day: number | null): boolean {
    return (
      day !== null &&
      day === this.now.getDate() &&
      this.year === this.now.getFullYear() &&
      this.month === this.now.getMonth() + 1
    );
  }

  isSunday(index: number): boolean {
    return index % 7 === 0;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
