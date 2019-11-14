import { getTabName, getHistoryArray } from './saveMarkdownSelectors';

describe('save markdown selectors', ()=> {
  const state = {
    saveMarkdown: {
      tabName: 'dog',
      history: 'cat'
    }
  };
  it('getCurrentTab gets the right state', ()=> {
    expect(getTabName(state)).toEqual('dog');
  });
  it('getCurrentBody gets the right state', ()=> {
    expect(getHistoryArray(state)).toEqual('cat');
  });
});
