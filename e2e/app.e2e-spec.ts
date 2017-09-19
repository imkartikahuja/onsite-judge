import { OnlineJudgePage } from './app.po';

describe('online-judge App', () => {
  let page: OnlineJudgePage;

  beforeEach(() => {
    page = new OnlineJudgePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
