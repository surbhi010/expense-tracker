import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker';
  selectedFeature = 'accounts';
  onSelectedCategory(selected: string) {
    this.selectedFeature = selected;
  }
}
