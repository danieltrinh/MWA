import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
  public counterValue = 5;

  public componentCounterValue;

  counterWasChanged(data)
  {
    this.componentCounterValue = data;
    console.log(data);
  }
}
