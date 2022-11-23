import React from 'react';

import styles from './index.module.scss';

export default function HandleModuleCSS() {
  return <p className={`${styles.header}`}>This is Header</p>;
}
