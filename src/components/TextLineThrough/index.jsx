import React from "react";
import cs from "classnames";

const TextLineThrough = ({ children, color }) => {
  return (
    <div
      className={cs("text-line-through", {
        [color]: color,
      })}
    >
      {children}
    </div>
  );
};

export default TextLineThrough;
