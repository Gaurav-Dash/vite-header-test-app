import * as s from './styles.module.scss';
import React from 'react';

const BlogPageHeroGradient = ({ children }) => {
  return (
    <div className="relative" style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          width: '100%',
          zIndex: 0,
        }}
      >
        <div className={`${s.yellow} ${s.circle}`} />
        <div className={`${s.green} ${s.circle}`} />
        <div className={`${s.blue} ${s.circle}`} />
      </div>
      {children}
    </div>
  );
};

export { BlogPageHeroGradient };
