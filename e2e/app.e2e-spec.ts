import { CamoteWebPage } from './app.po';

describe('camote-web App', function() {
  let page: CamoteWebPage;

  beforeEach(() => {
    page = new CamoteWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
