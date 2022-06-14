import React from 'react';
import ReactDOM from 'react-dom';

const Options = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="options-overlay" />
    <div className="options-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="options">
        <div className="options-header">
          <button type="button" className="options-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="options__button">
          <h3>Make a Transfer</h3>
        </div>
        <div className="options__button">
          <h3>Show last 5 transfers</h3>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Options;