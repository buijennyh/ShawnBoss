import React from 'react';

const InspirationHeader = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#556B2F',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={headerStyle}>
      <h1>Inspiration</h1>
    </div>
  );
};

export default InspirationHeader;
