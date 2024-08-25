'use client'
import React from 'react';
import styles from '../styles/VerifyPage.module.css'; // Import CSS module for styling
import Link from 'next/link';

interface Props {
  // Define any props you might need here
}

const VerifyPage: React.FC<Props> = () => {
  const handleVerify = () => {
    // Perform verification logic here
    console.log('Verification clicked!');
    // You can send the verification request to your backend here
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your mail is Verified!</h1>
      <p className={styles.instructions}>Click the button below to download the file.</p>
      <Link href="/extra/EchoshareSetup-V10.msi" className="default-btn" >
                  <i className="ri-download-line"></i> Download
                </Link>

    </div>
  );
}

export default VerifyPage;
