import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button-toggle-app';
  badgeCount: number;

  selectedValue: String[] = ["First"]

  toggleOptions: Array<String> = ["First", "Second"];

  ngOnInit() {
    this.badgeCount = 10;
  }
  
  selectionChanged(item) {
    console.log("Selected value: " + item.value);

    this.selectedValue.forEach(i => console.log(`Included Item: ${i}`));
  }
}
