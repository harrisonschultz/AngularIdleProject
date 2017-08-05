import { AngularIdleProjectPage } from './app.po';

describe('angular-idle-project App', () => {
  let page: AngularIdleProjectPage;

  beforeEach(() => {
    page = new AngularIdleProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
