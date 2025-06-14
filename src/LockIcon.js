import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '20px', // smaller font size
    width: '20px',    // smaller width
    height: '20px',   // smaller height
  },
};

const IconComponent = () => (
  <svg style={styles.Icon} viewBox="0 0 448 512">
    <path d="M144 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0C281.5 0 331 33.69 354.1 82.27C361.7 98.23 354.9 117.3 338.1 124.9C322.1 132.5 303.9 125.7 296.3 109.7C283.4 82.63 255.9 64 224 64C179.8 64 144 99.82 144 144L144 192z" />
  </svg>
);

const Icon = () => <IconComponent />;

export default Icon;
