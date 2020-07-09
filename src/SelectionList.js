import React from 'react';
import { useSnackbar } from 'notistack';
import { useSetRecoilState } from 'recoil';
import { selectionState } from './state';

import Selection from './Selection';
// @ts-ignore
import styles from './SelectionList.css';
// @ts-ignore
import rockIcon from './assets/rock.png';
// @ts-ignore
import paperIcon from './assets/paper.png';
// @ts-ignore
import scissorsIcon from './assets/scissors.png';

const selections = [
  { name: 'rock', icon: rockIcon },
  { name: 'paper', icon: paperIcon },
  { name: 'scissors', icon: scissorsIcon },
];

export default function SelectionList() {
  const { enqueueSnackbar } = useSnackbar();
  const setSelection = useSetRecoilState(selectionState);

  const handleSelection = (selection) => {
    setSelection(selection);
    enqueueSnackbar(`Selected ${selection}`, { variant: 'success' });
  };

  return (
    <div className={styles.root}>
      {selections.map((s, i) => (
        <Selection {...s} onClick={(e) => handleSelection(s.name)} key={i} />
      ))}
    </div>
  );
}
