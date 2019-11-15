export const SWITCH_BODY = 'SWITCH_BODY';

export const switchBody = (body, index)=> ({
  type: SWITCH_BODY,
  payload: body,
  index: index
});


