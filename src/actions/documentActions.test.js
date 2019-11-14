import { MARKDOWN_UPDATE, SWITCH_BODY, sendMarkdownUpdate, switchBody } from './documentActions';

describe('document actions', ()=> {
  it('MARKDOWN_UPDATE returns what is expected', ()=> {
    expect(MARKDOWN_UPDATE).toEqual('MARKDOWN_UPDATE');
  });
  it('SWITCH_BODY returns what is expected', ()=> {
    expect(SWITCH_BODY).toEqual('SWITCH_BODY');
  });
  it('sendMarkdownUpdate returns expected', ()=> {
    expect(sendMarkdownUpdate('dog')).toEqual({ type: 'MARKDOWN_UPDATE', payload: 'dog' });
  });
  it('switchBody returns expected', ()=> {
    expect(switchBody('dog')).toEqual({ type: 'SWITCH_BODY', payload: 'dog' });
  });
});
