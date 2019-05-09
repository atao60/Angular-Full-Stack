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
    expect(page.getNavbarElement(0)).toEqual('Home');
    expect(page.getNavbarElement(1)).toEqual('Cats');
    expect(page.getNavbarElement(2)).toEqual('Login');
    expect(page.getNavbarElement(3)).toEqual('Register');
    expect(page.getNavbarButton()).toBeFalsy();
  });

  it('should display the collapsed navbar for low resolutions', () => {
    browser.manage().window().setSize(640, 480);
    page.navigateTo();
    expect(page.getNavbarButton()).toEqual('');
  });
});
