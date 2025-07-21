import React from 'react';

const QRCodeModal = ({ isOpen, onClose, onShare, onScan }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Que voulez-vous faire ?</h2>
        <button style={styles.button} onClick={onShare}>📤 Partager le QR Code</button>
        <button style={styles.button} onClick={onScan}>📷 Scanner un QR Code</button>
        <button style={styles.close} onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  },
  modal: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  title: {
    marginBottom: '16px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  close: {
    marginTop: '10px',
    backgroundColor: '#ccc',
    color: '#333',
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default QRCodeModal;
