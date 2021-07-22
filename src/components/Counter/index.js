import React, { Fragment, useState } from 'react';
import './counter.css';
import './Counter';
import Counter from './Counter';

function Index() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => setToggle(currentState => !currentState)
  return (
    <Fragment>
      <button onClick={handleToggle}>show n unshow</button>
      {toggle && <Counter/>}
    </Fragment>
  );
}

export default Index;
