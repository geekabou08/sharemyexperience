import { ShareMyExperiencePage } from './app.po';

describe('share-my-experience App', () => {
  let page: ShareMyExperiencePage;

  beforeEach(() => {
    page = new ShareMyExperiencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
