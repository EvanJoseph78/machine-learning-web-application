import { Component } from '@angular/core';
import { InstructorInfoCardComponent } from './instructor-info-card/instructor-info-card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [InstructorInfoCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent { }
