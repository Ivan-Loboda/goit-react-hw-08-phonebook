import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Spinner() {
  return (
    <div className={s.overlay}>
      <Loader
        type="Bars"
        color="#8fbc8f"
        height={80}
        width={80}
        timeout={3000}
      />

      <div>Loading...</div>
    </div>
  );
}
