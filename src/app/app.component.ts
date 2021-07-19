import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private currentSchema: string = "dark";

  constructor(private themeService: ThemeService) {
  }

  toggleScheme() {
    this.currentSchema = this.currentSchema === "dark" ? "light" : "dark";
    this.themeService.setTheme(this.currentSchema);
  }

  ngOnInit(): void {
    this.themeService.setTheme(this.currentSchema);
  }
}
