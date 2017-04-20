import { DogToysPage } from './app.po';

describe('dog-toys App', () => {
  let page: DogToysPage;

  beforeEach(() => {
    page = new DogToysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
