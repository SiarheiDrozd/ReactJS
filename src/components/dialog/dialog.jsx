import React from 'react';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import './dialog.scss';
import { createPortal } from 'react-dom';

const Dialog = (props) => {
  const modalPortal = document.getElementById('modal-portal');

  return createPortal(
    props.isVisible && (
      <FocusTrap>
        <section className={'dialog__background'}>
          <div className={'dialog__modal'}>
            <button className={'dialog__close-button'} onClick={props.onClose}>
              X
            </button>
            <h2 className={'dialog__heading'}>{props.header}</h2>
            {props.children}
          </div>
        </section>
      </FocusTrap>
    ),
    modalPortal
  );
};

Dialog.propTypes = {
  isVisible: PropTypes.bool,
  header: PropTypes.string,
  body: PropTypes.node,
  onClose: PropTypes.func
};
export default Dialog;
