import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Animated, { FadeInRight } from "react-native-reanimated";
import React, { memo } from "react";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Siren } from 'lucide-react-native';
import {formatPhoneNumber} from "../utils/telNumber";
import { useFollow } from '../context/followContext'; 

const NotificationItem = ({
    item, 
    index, 
    isAldreadyFollow, 
    isLast, 
    style, 
    onPress,
    isActionFollow=false, 
    ...props
  }) => {
    const { following, setFollowing, refreshFollowData } = useFollow();

    

    return (
      <Animated.View
        entering={FadeInRight.delay(index * 200)
          .duration(500)
          .springify()
          .damping(14)}
        {...props}
      >
        <View
            key={item?.id}
            style={[
                styles.participantItem,
                !isLast && { borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
                isLast && { marginBottom: 10 },
                style
            ]}
        >
            <View style={styles.participantAvatar}>
                <Siren size={20} color="#999" />
            </View>

            <View style={styles.participantInfo}>
                <Text style={styles.participantName}>{item?.first_name} {item?.from.last_name}</Text>
                {item?.from.telnumber && (
                  <Text style={styles.followerPhoneNumber}>{formatPhoneNumber(item?.from.telnumber)}</Text>
                )}
            </View>

            <View style={styles.localisation}>
                <Text style={styles.coordonnee}>Lat: {item?.lat}</Text>
                <Text style={styles.coordonnee}>Lon: {item?.lon}</Text>
            </View>

        </View>
      </Animated.View>
    )
}

const styles = StyleSheet.create({
    participantItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: "#fff",
        marginHorizontal: wp(5)
      },
      participantAvatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginRight: 15,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 7,
        borderColor: '#0c3141',
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
      localisation: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'start',
        // borderColor: '#0c3141',
        // backgroundColor: 'red',
        width: 100,
        // borderWidth: 1,
        flexDirection: "column"
      },
      coordonnee: {
        fontSize: 11,
        fontWeight: '600',
        color: '#6b7280',
      },
      followButton: {
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

export default memo(NotificationItem);
