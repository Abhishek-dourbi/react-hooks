import React, {useLayoutEffect, useState} from "react";

const UseLayoutEffect = () => {
    const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div onClick={() => setValue(0)}>
      value: {value}
    </div>
  );
};

export default UseLayoutEffect;