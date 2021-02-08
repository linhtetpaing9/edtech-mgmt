import React from 'react';

const FullPageLayout = ({ children }) => {

  return (
    <div style={{ padding: 12, minHeight: 800 }}>
      {children}
    </div>
  )
};

export default FullPageLayout;