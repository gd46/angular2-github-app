export class HttpDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('http-demo-app h1')).getText();
  }
}
