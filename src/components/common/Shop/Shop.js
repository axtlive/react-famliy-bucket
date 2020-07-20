import React from 'react';

const Shop = props => {
  return (
    <div>
      <ul>
        <li>{props.title}</li>
        <li>{props.content}</li>
      </ul>
    </div>
  );
}

export default Shop;
