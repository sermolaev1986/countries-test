import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
  }

  public setTheme(themeToSet: string) {
    this.setStyle(
      "theme",
      `assets/${themeToSet}.css`
    );
  }

  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string) {
    this.getLinkElementForKey(key).setAttribute("href", href);
  }

  private getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  private getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(
      `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
    );
  }

  private createLinkElementWithKey(key: string) {
    const linkEl = document.createElement("link");
    linkEl.setAttribute("rel", "stylesheet");
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  private getClassNameForKey(key: string) {
    return `app-${key}`;
  }

}
