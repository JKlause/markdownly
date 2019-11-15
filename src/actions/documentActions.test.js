import { SWITCH_BODY,  switchBody } from './documentActions';

describe('document actions', ()=> {
  it('SWITCH_BODY returns what is expected', ()=> {
    expect(SWITCH_BODY).toEqual('SWITCH_BODY');
  });
  it('switchBody returns expected', ()=> {
    expect(switchBody('dog', 1)).toEqual({ type: 'SWITCH_BODY', payload: 'dog', index: 1 });
  });
});
