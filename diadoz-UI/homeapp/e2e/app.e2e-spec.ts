import { HomeappPage } from './app.po';

describe('homeapp App', () => {
  let page: HomeappPage;

  beforeEach(() => {
    page = new HomeappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
