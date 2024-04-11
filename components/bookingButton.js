// Med React 17+ och JSX Transform, behöver du inte denna import för JSX:
// import React from 'react';
import styles from '@/styles/button.module.css';

export const BookingButton = () => {
  const handleClick = () => {
    window.open('https://calendly.com/separationscoach', '_blank');
  };

  return (
    <button
    className={styles.BookingButton}
      type="button"
      onClick={handleClick}
      aria-label='Boka tjänst'>
      Boka tid
    </button>
  );
};
