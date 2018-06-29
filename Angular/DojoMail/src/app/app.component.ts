import { Component } from '@angular/core';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {
      email: 'bill.gates@microsoft.com',
      importance: 'high',
      subject: 'Need to meet',
      content: 'As you are new to seattle....'
    },
    {
      email: 'ado@lovelace.com',
      importance: 'high',
      subject: 'Programming',
      content: 'Enchantress of numbers'
    }
  ];
}
