import { AdminCentralPage } from './app.po';

describe('admin-central App', function() {
  let page: AdminCentralPage;

  beforeEach(() => {
    page = new AdminCentralPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
