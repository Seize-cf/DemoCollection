import React from 'react';

import { HandleSCSS } from './handleSCSS';
import tryCase from '../try';

import { HandleModuleCSS } from './handleModuleCSS';

const AllComponents = () => {
  tryCase.caseA();

  return (
    <>
      <HandleSCSS />
      <HandleModuleCSS />
    </>
  );
};

export default AllComponents;
