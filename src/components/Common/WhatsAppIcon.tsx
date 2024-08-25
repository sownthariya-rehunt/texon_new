import React from 'react';

interface WhatsAppIconProps {
  phoneNumber: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: '80px', right: '20px', zIndex: 9999 }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
        alt="WhatsApp Icon"
        width="50"
        height="50"
        style={{ cursor: 'pointer' }}
        onClick={handleClick}
      />
    </div>
  );
};

export default WhatsAppIcon;