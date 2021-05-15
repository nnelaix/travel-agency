import React from 'react';
import styles from './HappyHourAdd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {

  constructor(){
    super();
  
    /* run this.forceUpdate() every second */
    setInterval(() => {
      this.forceUpdate();
    },
    1000
    );
  }
  render() {
    const {title} = this.props; 

    return (
      <div className ={styles.component}>
        <h3 className ={styles.title}>{title}</h3>
        <div className='promoDescription'>{this.getCountdownTime()}</div>
      </div>
    );
  }
  
  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
}

HappyHourAd.propTypes = { 
  title: PropTypes.string,
};



export default HappyHourAd;
