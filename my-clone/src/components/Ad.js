function Ad() {
    const adStyle = {
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'center',
      background: 'rgb(95, 61, 200)',
      color: 'rgb(255, 255, 255)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    };
  
    return (
      <div style={adStyle}>
        <span>
          "Ownr Lowers Sole Proprietorship Fee to $49"
          <a href="https://www.ownr.co/blog/ownr-lowers-sole-proprietorship-fee/">Learn more</a>
        </span>
      </div>
    );
  }
  
  export default Ad;
  