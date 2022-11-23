import React from 'react';
import ids from 'virtual:svg-icons-names';
import tryCase from '../try';
import SVGIcon from './SVGIcon';

const AllComponents = () => {
  tryCase.caseA();

  return (
    <>
      {/*<HandleSCSS />*/}
      {/*<HandleModuleCSS />*/}
      {/*<ImportGlob />*/}
      {ids.map((item: any) => (
        <SVGIcon name={item} key={item} width="50" height="50" />
      ))}
    </>
  );
};

export default AllComponents;
