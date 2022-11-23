import React from 'react';

// FIXME glob() 方式引入的文件 typing 怎么写更优雅
const svgs = import.meta.glob<any>('@assets/icons/*.svg', { eager: true });
const svgUrls = Object.values(svgs).map((module) => module.default);

export default function ImportGlob() {
  return (
    <div>
      <p>ImportGlob</p>
      {svgUrls.map((item) => (
        <img src={item} key={item} width="50" alt="" />
      ))}
    </div>
  );
}
