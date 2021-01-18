import React from 'react';

function Animation(props) {
  let count = 0;

  function stopAnimation() {
    count += 1;
    if (count === 2) {
      props.setPlayAnimation(false)
    }
  };

  return (
    <div id='animation' onAnimationEnd={() => stopAnimation()}></div>
  );
};

export default Animation;