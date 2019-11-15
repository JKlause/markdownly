import { LANDING_PAGE,  leaveLandingPage } from './landingPageActions';

describe('landing page actions', ()=> {
  it('LANDING_PAGE returns what is expected', ()=> {
    expect(LANDING_PAGE).toEqual('LANDING_PAGE');
  });
  it('leaveLandingPage returns expected', ()=> {
    expect(leaveLandingPage()).toEqual({ type: 'LANDING_PAGE' });
  });
});
