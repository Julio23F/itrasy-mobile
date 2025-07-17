import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FriendItem = ({item, isAldreadyFollow, isLast, ...props}) => {
    return (
        <View
            key={item?.id}
            style={[
                styles.participantItem,
                !isLast && { borderBottomWidth: 1, borderBottomColor: '#f3f4f6',},
                isLast && { marginBottom: 10 },
                props.style
            ]}
            >
            <Image source={{ uri: item?.avatar }} style={styles.participantAvatar} />
            <View style={styles.participantInfo}>
                <Text style={styles.participantName}>{item?.name}</Text>
                {item?.phoneNumber && (
                <Text style={styles.followerPhoneNumber}>{item?.phoneNumber}</Text>
                )}
            </View>
            {/* <EllipsisVertical size={20} color="#999" /> */}
            {
                isAldreadyFollow ?
                <TouchableOpacity style={styles.alreadyFollowButton}>
                    <Text style={styles.alreadyFollowButtonText}>Suivi</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={[styles.followButton, styles.activeButton]}>
                    <Text style={[styles.followButtonText, styles.activeButtonText]}>Suivre</Text>
                </TouchableOpacity>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    participantItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: "#fff",
        // width: "90%",
        marginHorizontal: wp(5)
      },
      participantAvatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginRight: 15,
      },
      participantInfo: {
        flex: 1,
      },
      participantName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
      },
      followerPhoneNumber: {
        fontSize: 14,
        color: '#6b7280',
      },
      alreadyFollowButton: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
    
        borderColor: '#0c3141',
        backgroundColor: 'transparent',
        borderWidth: 1,
      },
      alreadyFollowButtonText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#6b7280',
      },
      followButton: {
        // flex: 1,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
      },
      activeButton: {
        backgroundColor: '#0c3141',
      },
      activeButtonText: {
        color: '#ffffff',
      },
      followButtonText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#6b7280',
      },
});

export default FriendItem;