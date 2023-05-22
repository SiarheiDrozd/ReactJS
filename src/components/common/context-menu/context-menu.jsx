import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './context-menu.scss';
const ContextMenu = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <button type={'button'} className={'context-menu__button'} onClick={() => setVisible(true)}>
        <div className={'dot'}></div>
        <div className={'dot'}></div>
        <div className={'dot'}></div>
      </button>
      {visible && (
        <ul className={'context-menu__list'}>
          <li>
            <button className={'context-menu__close-button'} onClick={() => setVisible(false)}>
              X
            </button>
          </li>
          {props.menu.map((menuItem) => (
            <li key={menuItem} className={'menu-item'} onClick={() => props.onClick(menuItem)}>
              {menuItem}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default ContextMenu;
ContextMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
};
