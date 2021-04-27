import React from 'react';
import styles from './HappyHourAdd.scss';

class HappyHourAd extends React.Component {
  render() {
    return (
      <div className ={styles.component}>
        <h3 className ={styles.title}>Happy Hour</h3>
        <div className={styles.promoDescription}></div>
      </div>
    );
  }
}



export default HappyHourAd;
