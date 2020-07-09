import React from 'react';
import { SnackbarProvider } from 'notistack';
import { RecoilRoot } from 'recoil';
import SelectionList from './SelectionList';
// @ts-ignore
import styles from './App.css';

export default function App() {
  return (
    <RecoilRoot>
      <SnackbarProvider>
        <div className={styles.app}>
          <h1>Rock, paper and scissors</h1>
          <h2>Make your pick:</h2>
          <SelectionList />
        </div>
      </SnackbarProvider>
    </RecoilRoot>
  );
}
