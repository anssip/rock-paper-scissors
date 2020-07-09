import { atom } from 'recoil';

export const selectionState = atom({
  key: 'selection', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
