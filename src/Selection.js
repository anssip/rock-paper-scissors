import React from 'react';
import clsx from 'clsx';
import { useRecoilValue } from 'recoil';
import { selectionState } from './state';

// @ts-ignore
import styles from './Selection.css';

export default function Selection({ name, icon, onClick }) {
  const selection = useRecoilValue(selectionState);
  const isSelected = selection === name;

  return (
    <div
      className={clsx(styles.root, isSelected && styles.selected)}
      onClick={onClick}
    >
      <img className={styles.icon} src={icon} />
    </div>
  );
}
