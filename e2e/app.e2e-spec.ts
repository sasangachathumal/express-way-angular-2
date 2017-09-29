import { ExpressWayPage } from './app.po';

describe('express-way App', function() {
  let page: ExpressWayPage;

  beforeEach(() => {
    page = new ExpressWayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
