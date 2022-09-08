import React from 'react';
import DrawerLeft from '../components/layout/sidebar/DrawerLeft';

const MyFarm = () => {
  const renderData = <div>Hello</div>;

  return <DrawerLeft title="MY FARM" page={renderData} />;
};

export default MyFarm;
