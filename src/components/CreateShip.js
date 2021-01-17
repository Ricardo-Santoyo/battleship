import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

function CreateShip(props) {
  const [pos, setPos] = useState(0);

  const [, drag] = useDrag({
    item: { type: 'ship', length:props.length, id:props.id, pos:pos },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  function createShip() {
    let ship = [];
    for (let i = 0; i < props.length; i++) {
      ship.push(<span className={`ship ${props.id}`} key={i} data-key={i}></span>)
    }
    return ship;
  };

  return (
    <div 
    className={`shipContainer ${props.axis} ${props.length}`} 
    ref={drag} 
    onMouseDown={(e) => setPos(e.target.getAttribute('data-key'))}
    onTouchStart={(e) => setPos(e.target.getAttribute('data-key'))}>
      {createShip()}
    </div>
  );
};

export default CreateShip;