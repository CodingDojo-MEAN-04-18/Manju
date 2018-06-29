import { Component } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Timezone Display';
  dateTime: string;
  timezone: string;
  onButtonClick(timezone) {
    this.timezone = timezone;
    this.dateTime = Date();
  }
  clear() {
    this.dateTime = null;
  }
}

