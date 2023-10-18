import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent {

}
