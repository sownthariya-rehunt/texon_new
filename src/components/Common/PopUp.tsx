import React from 'react';


interface PopupProps {
  message: string;
  onClose: () => void; // Function to close the popup
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span> {/* Close button */}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;