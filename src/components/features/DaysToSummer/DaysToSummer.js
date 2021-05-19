import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';


class DaysToSummer extends React.Component {
  getCountdownDate(){
    const currentDate = new Date();
    const summerStartDate = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    // const summerEndDate = new Date(Date.UTC(currentDate.getUTCFullYear(), 7, 22));
  
    if((currentDate.getUTCMonth() === 7 && currentDate.getUTCDate() > 22) || 
      currentDate.getUTCMonth() > 7 || currentDate.getUTCMonth() < 5 || (currentDate.getUTCMonth() === 5 && currentDate.getUTCDate() < 21)) {
      if(currentDate.getUTCMonth() > 7 || (currentDate.getUTCMonth() === 7 && currentDate.getUTCDate > 21)) {
        summerStartDate.setUTCFullYear(currentDate.getUTCFullYear()+1);
      } 
      const summerDay = Math.floor((summerStartDate.getTime() - currentDate.getTime()) / (1000*60*60*24));

      if (summerDay > 1) {
        return summerDay + ' days to summer!';
      } else if (summerDay === 1 ) {
        return '1 day to summer!';
      }
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



