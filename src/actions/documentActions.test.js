import { LANDING_PAGE,  leaveLandingPage, TAB_NAME_CHANGE, NEW_HISTORY, UPDATE_CURRENT_INDEX, UPDATE_HISTORY, sendTabName, updateCurrentIndex, newHistory, updateHistory } from './documentActions';

describe('document actions', ()=> {
  it('LANDING_PAGE returns what is expected', ()=> {
    expect(LANDING_PAGE).toEqual('LANDING_PAGE');
  });
  it('leaveLandingPage returns expected', ()=> {
    expect(leaveLandingPage()).toEqual({ type: 'LANDING_PAGE' });
  });
  it('TAB_NAME_CHANGE returns what is expected', ()=> {
    expect(TAB_NAME_CHANGE).toEqual('TAB_NAME_CHANGE');
  });
  it('NEW_HISTORY returns what is expected', ()=> {
    expect(NEW_HISTORY).toEqual('NEW_HISTORY');
  });
  it('UPDATE_HISTORY returns what is expected', ()=> {
    expect(UPDATE_HISTORY).toEqual('UPDATE_HISTORY');
  });
  it('UPDATE_CURRENT_INDEX returns what is expected', ()=> {
    expect(UPDATE_CURRENT_INDEX).toEqual('UPDATE_CURRENT_INDEX');
  });
  it('sendTabName returns expected', ()=> {
    expect(sendTabName('dog')).toEqual({ type: 'TAB_NAME_CHANGE', payload: 'dog' });
  });
  it('newHistory returns expected', ()=> {
    expect(newHistory('cat', 'dog')).toEqual({ type: 'NEW_HISTORY', payload: ['cat', 'dog'] });
  });
  it('updateHistory returns expected', ()=> {
    expect(updateHistory('cat')).toEqual({ type: 'UPDATE_HISTORY', payload: 'cat' });
  });
  it('updateCurrentIndex returns expected', ()=> {
    expect(updateCurrentIndex(1)).toEqual({ type: 'UPDATE_CURRENT_INDEX', payload: 1 });
  });
});
