import { MyWebAppPage } from './app.po';

describe('my-web-app App', () => {
  let page: MyWebAppPage;

  beforeEach(() => {
    page = new MyWebAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
