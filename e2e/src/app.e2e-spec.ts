import { browser } from 'protractor';
import { MeanFullStackPage } from './app.po';

describe('mean-full-stack App', () => {
  let page: MeanFullStackPage;

  beforeEach(() => {
    page = new MeanFullStackPage();
  });

  it('should display the expanded navbar for high resolutions', () => {
    browser.manage().window().setSize(1024, 768);
    page.navigateTo();
    let i = 1;
    expect(page.getNavbarElement(i++)).toEqual('Home');
    expect(page.getNavbarElement(i++)).toEqual('Cats');
    expect(page.getNavbarElement(i++)).toEqual('About');
    expect(page.getNavbarElement(i++)).toEqual('Login');
    expect(page.getNavbarElement(i++)).toEqual('Register');
    expect(page.getNavbarButton()).toBeFalsy();
  });

  it('should display the collapsed navbar for low resolutions', () => {
    browser.manage().window().setSize(640, 480);
    page.navigateTo();
    expect(page.getNavbarButton()).toEqual('');
  });
});
