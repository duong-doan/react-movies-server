import React from 'react';
import cs from 'classnames';

const TextLineThrough = ({ children, color, custom = {} }) => {
  return (
    <div
      className={cs('text-line-through', {
        [color]: color,
      })}
      style={{ ...custom }}
    >
      {children}
    </div>
  );
};

export default TextLineThrough;
