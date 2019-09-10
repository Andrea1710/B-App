import { Injectable, Inject } from "@angular/core";

interface Adjustements {
  themeUrl: string;
  theme: string;
}

@Injectable({ providedIn: "root" })
export class SettingsService {
  adjustements: Adjustements = {
    themeUrl: "assets/css/colors/default-dark.css",
    theme: "default-dark"
  };

  constructor() {
    this.loadAdjustements();
  }

  saveAdjustements() {
    // console.log('Guardado en el localStorage');
    localStorage.setItem("Adjustements", JSON.stringify(this.adjustements));
  }

  loadAdjustements() {
    if (localStorage.getItem("Adjustements")) {
      this.adjustements = JSON.parse(localStorage.getItem("Adjustements"));
      this.applyTheme(this.adjustements.theme);
    } else this.applyTheme(this.adjustements.theme);
  }

  applyTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    document.getElementById("theme").setAttribute("href", url);
    this.adjustements.theme = theme;
    this.adjustements.themeUrl = url;
    this.saveAdjustements();
  }
}
