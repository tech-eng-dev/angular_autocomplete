import { NgMaterialPage } from './app.po';

describe('ng-material App', () => {
  let page: NgMaterialPage;

  beforeEach(() => {
    page = new NgMaterialPage();
  });

  it('should display message saying Ng Material', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ng Material');
  });
});
