import { TinRoofTestPage } from './app.po';

describe('tin-roof-test App', function() {
  let page: TinRoofTestPage;

  beforeEach(() => {
    page = new TinRoofTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
