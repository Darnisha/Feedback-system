import { Component } from '@angular/core';
import { ApiServicesService } from './services/api-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiServicesService]
})
export class AppComponent {
  title = 'psg-feedback-app';
}
