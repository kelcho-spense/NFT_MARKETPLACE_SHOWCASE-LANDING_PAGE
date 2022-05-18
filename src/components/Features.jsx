import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';
const Features = () => {
  const FeatureCard = ({iconUrl,iconText}) => (
      <div className={styles.featureCard}>
        <img src={iconUrl} alt="icon" className={styles.featureImg} />
        <p className={styles.featureText}>{iconText}</p>
      </div>
  )
   
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>ProNef has been developed using a cross platform Technology, React Native.</p>
        </div>
      </div>
      <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
      </div>
    </div>
  )
}
 
export default Features