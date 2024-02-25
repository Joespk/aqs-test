import { SetActiveLinkAction } from '../types/types';

export const setActiveLink = (link: string): SetActiveLinkAction => ({
  type: 'setActiveLink',
  payload: link,
});
