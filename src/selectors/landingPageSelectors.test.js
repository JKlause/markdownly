import { getLandingPage } from './landingPageSelectors';

describe('save markdown selectors', ()=> {
  const state = {
    landingPage: false
  };
  it('getCurrentTab gets the right state', ()=> {
    expect(getLandingPage(state)).toEqual(false);
  });
});
