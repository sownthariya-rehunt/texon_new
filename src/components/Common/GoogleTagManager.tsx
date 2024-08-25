import React, { useEffect } from 'react';

interface GoogleTagManagerProps {
  gtmId: string;
}

// Define a global interface merging Window with 'dataLayer' property
declare global {
  interface Window {
    dataLayer?: any[];
  }
}
const GoogleTagManager: React.FC < GoogleTagManagerProps> = ({ gtmId }) => {
    useEffect(() => {
      // Initialize Google Tag Manager
      const initializeGTM = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer!.push(args);
        }
        gtag('js', new Date());
        gtag('config', gtmId);
      };
  
      // Load Google Tag Manager script
      const loadGTM = () => {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
        script.async = true;
        document.head.appendChild(script);
      };
  
      loadGTM();
      initializeGTM();
  
      // Clean up
      return () => {
        if (window.dataLayer) {
            delete window.dataLayer;
          }
      };
    }, [gtmId]);
  
    return null; // This component doesn't render anything to the DOM
  };
  
  export default GoogleTagManager;