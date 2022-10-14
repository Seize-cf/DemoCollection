import React from 'react';

import styles from './index.module.scss';

export function HandleModuleCSS() {
  return <p className={`${styles.header}`}>This is Header</p>;
}
