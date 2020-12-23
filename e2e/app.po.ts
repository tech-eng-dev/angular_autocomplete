import { browser, element, by } from 'protractor';

export class NgMaterialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.header-headline h1')).getText();
  }
}
