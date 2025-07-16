import { QrCode } from 'lucide-react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

const userInfoCard = ({...props}) => {

    return (
        <View style={[styles.userInfoCard, props.style]}>
            <View style={styles.userInfoHeader}>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' }}
                style={styles.merchantLogo}
            />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>FARALAHY Julio</Text>
                <Text style={styles.userPhone}>+261 32 45 018 01</Text>
            </View>
            {/* <Text style={styles.showUserInfo}>QrCode</Text> */}
            <QrCode size={20} color="#999" />

            </View>
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
});

export default userInfoCard;