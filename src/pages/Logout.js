import React from 'react';
import DrawerLeft from '../components/layout/sidebar/DrawerLeft';

const Logout = () => {
  const renderData = <div>Hello</div>;

  return <DrawerLeft title="LOG OUT" page={renderData} />;
};

export default Logout;
