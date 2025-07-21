import React, { useState } from 'react';

import { QrCode } from 'lucide-react-native';
import { Image, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import {formatPhoneNumber} from "../utils/telNumber";
import QRCode from 'react-native-qrcode-svg';
import QRCodeModal from "./QRCodeModal";

const userInfoCard = ({user, ...props}) => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleShare = () => {
    setShowQRCode(true);
  };
    return (
        <View style={[styles.userInfoCard, props.style]}>
            <View style={styles.userInfoHeader}>
            {/* <Image
                source={{ uri: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' }}
                style={styles.merchantLogo}
            /> */}
            <Image
              source={require('../assets/images/logo.jpg')}
              style={styles.merchantLogo}
            />

            <View style={styles.userInfo}>
                <Text style={styles.userName}>{user?.last_name} {user?.first_name}</Text>
                <Text style={styles.userPhone}>{formatPhoneNumber(user?.telnumber)}</Text>
            </View>
            {/* <Text style={styles.showUserInfo}>QrCode</Text> */}
            
            <TouchableOpacity
                // onPress={() => setShowQRCode(false)}
                onPress={handleShare}

              >
                <QrCode size={20} color="#999" />
              </TouchableOpacity>
            </View>

            <QRCodeModal 
              isOpen={false}
              onClose={() => setModalOpen(false)}
              onShare={handleShare}
              onScan={() => setModalOpen(false)}
            />
            <Modal
              visible={showQRCode}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setShowQRCode(false)}
            >
              <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Voici ton QR Code</Text>
                  <QRCode value={"1234567890"} size={200} />
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setShowQRCode(false)}
                  >
                    <Text style={styles.closeButtonText}>Fermer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    userInfoCard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 8,
        // elevation: 1,
    
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
      },
      userInfoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      merchantLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
      },
      userInfo: {
        flex: 1,
      },
      userName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 4,
      },
      userPhone: {
        fontSize: 14,
        color: '#6b7280',
      },
      showUserInfo: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
      },

      qrButton: {
        padding: 15,
        backgroundColor: '#2196F3',
        borderRadius: 8,
      },
    
      qrButtonText: {
        color: 'white',
        fontSize: 18,
      },
    
      modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      modalContent: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 10,
        alignItems: 'center',
      },
    
      modalTitle: {
        fontSize: 20,
        marginBottom: 15,
      },
    
      closeButton: {
        marginTop: 35,
        borderRadius: 8,

        backgroundColor: '#0c3141',
        paddingVertical: 13,
        borderRadius: 10,
        alignItems: 'center',

        width: 150
      },
    
      closeButtonText: {
        color: 'white',
        fontSize: 16,
      },
});

export default userInfoCard;