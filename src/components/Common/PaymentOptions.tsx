import React from 'react';

interface WhatsAppIconProps {
  phoneNumber: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = () => {
  
  return (
    <div style={{ position: 'fixed', bottom: '0px', left: '20px', zIndex: 9999 }}>
      <img
        src="/images/Home-Payment/ES-payment (1).png"
        alt="WhatsApp Icon"
        width="200px"
        height="200px"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default WhatsAppIcon;