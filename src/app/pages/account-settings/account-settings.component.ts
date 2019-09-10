import { Component, OnInit } from "@angular/core";

import { SettingsService } from "src/app/services/service.index";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(public settingsService: SettingsService) {}

  ngOnInit() {
    this.putCheck();
  }

  changeColor(theme: string, link: any) {
    this.applyCheck(link);
    this.settingsService.applyTheme(theme);
  }

  applyCheck(link: any) {
    const selectors: any = document.getElementsByClassName("selector");
    for (let ref of selectors) ref.classList.remove("working");
    link.classList.add("working");
  }

  putCheck() {
    const selectors: any = document.getElementsByClassName("selector");
    const theme = this.settingsService.adjustements.theme;
    for (let ref of selectors) {
      if (ref.getAttribute("data-theme") === theme) {
        ref.classList.add("working");
        break;
      }
    }
  }
}
