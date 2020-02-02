import React from 'react';

const ListGroup = props => {
  const {
    items,
    textPropperty,
    valueProperty,
    selectedItem,
    onItemSelect
  } = props;

  return (
    <ul className='list-group'>
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
        >
          {item[textPropperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textPropperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
