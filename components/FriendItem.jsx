import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Animated, { FadeInRight } from "react-native-reanimated";
import React, { memo } from "react";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { EllipsisVertical } from 'lucide-react-native';
import {unfollowUser as unfollowUserService} from "../services/followServices";

const FriendItem = ({
    item, 
    index, 
    isAldreadyFollow, 
    isLast, 
    style, 
    onPress,
    isActionFollow=false, 
    ...props
  }) => {

    const showLogoutAlert = () => {
      Alert.alert("Retirer", "Êtes-vous sûr de vouloir ne plus suivre cette personne ?", [
        {
          text: "Annuler",
          onPress: () => console.log("Annuler"),
        },
        {
          text: "Retirer",
          onPress: () => unfollowUser(),
        },
      ]);
    };

    const unfollowUser = async () => {
      try {
        const followingData = await unfollowUserService(item.id);

        console.log("unfollowUserService /////////////////////////", followingData)

        // if (followingData) {
        //   setFollowing(followingData);
        // }
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur", error);
      }
    };

    return (
      <Animated.View
        entering={FadeInRight.delay(index * 200)
          .duration(500)
          .springify()
          .damping(14)}
        style={styles.container}
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
            <Image 
              source={{ 
                uri: item.avatar ? item?.avatar : "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" }} 
                style={styles.participantAvatar} 
            />
            <View style={styles.participantInfo}>
                <Text style={styles.participantName}>{item?.first_name} {item?.last_name}</Text>
                {item?.telnumber && (
                  <Text style={styles.followerPhoneNumber}>{item?.telnumber}</Text>
                )}
            </View>

            {isActionFollow ? (
              isAldreadyFollow ? (
                <TouchableOpacity style={styles.alreadyFollowButton} onPress={onPress}>
                    <Text style={styles.alreadyFollowButtonText}>Suivi</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={[styles.followButton, styles.activeButton]} onPress={onPress}>
                    <Text style={[styles.followButtonText, styles.activeButtonText]}>Suivre</Text>
                </TouchableOpacity>
              )
            ) : (
              <Menu>
                <MenuTrigger>
                  <EllipsisVertical size={20} color="#999" />
                </MenuTrigger>

                <MenuOptions
                  customStyles={{
                    optionsContainer: {
                      width: 140, 
                      paddingVertical: 2,
                    }
                  }}
                >
                  <MenuOption
                    onSelect={() => alert(`Cette action est actuellement en cours de développement.`)}
                    text="Voir profil"
                    customStyles={{
                      optionWrapper: {
                        paddingVertical: 12,
                        paddingHorizontal: 16,

                        borderBottomWidth: 1,
                        borderBottomColor: "#f0f0f0"
                      },
                      optionText: {
                        fontSize: 14,
                      },
                     
                    }}
                  />
                  <MenuOption
                    onSelect={showLogoutAlert}
                    text="Retirer"
                    customStyles={{
                      optionWrapper: {
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                      },
                      optionText: {
                        fontSize: 14,
                      }
                    }}
                  />
                </MenuOptions>
              </Menu>
            )}
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

export default memo(FriendItem);
