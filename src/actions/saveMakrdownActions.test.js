import { TAB_NAME_CHANGE, ADD_TAB, NEW_HISTORY, UPDATE_HISTORY, sendTabName, addTab, newHistory, updateHistory } from './saveMarkdownActions';

describe('save markdown actions', ()=> {
  it('TAB_NAME_CHANGE returns what is expected', ()=> {
    expect(TAB_NAME_CHANGE).toEqual('TAB_NAME_CHANGE');
  });
  it('ADD_TAB returns what is expected', ()=> {
    expect(ADD_TAB).toEqual('ADD_TAB');
  });
  it('NEW_HISTORY returns what is expected', ()=> {
    expect(NEW_HISTORY).toEqual('NEW_HISTORY');
  });
  it('UPDATE_HISTORY returns what is expected', ()=> {
    expect(UPDATE_HISTORY).toEqual('UPDATE_HISTORY');
  });
  it('sendTabName returns expected', ()=> {
    expect(sendTabName('dog')).toEqual({ type: 'TAB_NAME_CHANGE', payload: 'dog' });
  });
  it('addTab returns expected', ()=> {
    expect(addTab('dog')).toEqual({ type: 'ADD_TAB', payload: 'dog' });
  });
  it('newHistory returns expected', ()=> {
    expect(newHistory('cat', 'dog')).toEqual({ type: 'NEW_HISTORY', payload: ['cat', 'dog'] });
  });
  it('updateHistory returns expected', ()=> {
    expect(updateHistory('cat', 'dog')).toEqual({ type: 'UPDATE_HISTORY', payload: ['cat', 'dog'] });
  });
});
