import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';


class DaysToSummer extends React.Component {
  getCountdownDate(){
    const currentDay = new Date();
    const daysToSummer = new Date(Date.UTC(currentDay.getUTCFullYear(), 5, 21));
  
    if((currentDay.getUTCMonth() === 8 && currentDay.getUTCDate() >= 23) || currentDay.getUTCMonth() > 8 ){
      daysToSummer.setUTCFullYear(currentDay.getUTCFullYear()+1);
    }
  
    const summerDay = Math.round(daysToSummer.getTime() - currentDay.getTime()) / (1000*60*60*24); 
    
    if (summerDay > 1) {
      return daysToSummer + ' days to summer!';
    } else if (summerDay === 1 ) {
      return '1 day to summer!';
    } else {
      return '';
    }
  }

  render() {
    const countdownDays = this.getCountdownDate();

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{countdownDays}</h2>
      </div>
    );
  }
}

DaysToSummer.propTypes = { 
  countdownDays: PropTypes.string,
};

export default DaysToSummer;



