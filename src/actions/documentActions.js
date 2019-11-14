export const MARKDOWN_UPDATE = 'MARKDOWN_UPDATE';

export const sendMarkdownUpdate = markdown => ({
  type: MARKDOWN_UPDATE,
  payload: markdown
});

export const SWITCH_BODY = 'SWITCH_BODY';

export const switchBody = body => ({
  type: SWITCH_BODY,
  payload: body
});


