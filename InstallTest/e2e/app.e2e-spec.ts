import { InstallTestPage } from './app.po';

describe('install-test App', () => {
  let page: InstallTestPage;

  beforeEach(() => {
    page = new InstallTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
