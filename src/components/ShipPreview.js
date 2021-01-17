import React from 'react';
import { usePreview } from 'react-dnd-multi-backend';

function ShipPreview(props) {
  const {display, item, style} = usePreview();
  if (!display) {
    return null;
  }

  function createShip() {
    let ship = [];
    for (let i = 0; i < item.length; i++) {
      ship.push(<span className={`ship ${item.id}`}  key={i}></span>)
    }
    return ship;
  };

  return (
    <div className={`shipContainer ${props.axis} ${item.length}`}  style={style}>{createShip()}</div>
  );
};

export default ShipPreview;