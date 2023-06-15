import React from "react";

export default function HellModeModal({ showHellModal, setShowHellModal }) {
  function handleContinue() {
    setShowHellModal(false);
  }
  return (
    <div className="modal">
      {showHellModal && (
        <div>
          <h2>Welcome To Wordle Hell</h2>
          <p>Try to guess the character.</p>
          <p>Some include both the first and last name.</p>
          <p>Do NOT use spaces.</p>
          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
