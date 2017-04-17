import { SkreenPage } from './app.po';

describe('skreen App', function() {
  let page: SkreenPage;

  beforeEach(() => {
    page = new SkreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
