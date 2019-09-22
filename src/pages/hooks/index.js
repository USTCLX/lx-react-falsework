import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

import './index.css';


const Hook = (props) => {
  const elm = useRef(null);

  const [intersecting] = useOnScreen(elm);

  console.log('props.id', props.id, intersecting)

  return (
    <div className="hook" ref={elm}>
      <h1>Hook{`${props.id}`}</h1>
    </div>
  );
};

export default Hook;
