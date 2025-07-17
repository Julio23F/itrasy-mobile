import { EllipsisVertical } from 'lucide-react-native';
import { default as React, useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import { MaterialTabBar, Tabs } from 'react-native-collapsible-tab-view';
import UserInfoCard from "../../../components/UserInfoCard";
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FriendItem from "../../../components/FriendItem";
import { router, Link } from 'expo-router';
// import { useRouter } from 'expo-router';


export default function FollowersPage() {
  // const router = useRouter();

  const followers = [
    {
      id: '1',
      name: 'You',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '3',
      name: 'Wade Warren',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
    },
    {
      id: '4',
      name: 'Cameron Williamson',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '3',
      name: 'Wade Warren',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
    },
    {
      id: '4',
      name: 'Cameron Williamson',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '3',
      name: 'Wade Warren',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
    },
    {
      id: '4',
      name: 'Cameron Williamson',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '3',
      name: 'Wade Warren',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '4',
      name: 'Cameron Williamson',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '3',
      name: 'Wade Warren',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
    },
    {
      id: '4',
      name: 'Cameron Williamson',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
    {
      id: '3',
      name: 'Wade Warren',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
    },
    {
      id: '4',
      name: 'Cameron Williamson',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      phoneNumber: '+261 32 05 138 45',
    },
  ];
  const renderItem = useCallback(({ item }) => {
    const isLast = index === followers.length - 1;
    return (
      <View
        key={item.id}
        style={[
          styles.participantItem,
          !isLast && { borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
        ]}
      >
        <Image source={{ uri: item.avatar }} style={styles.participantAvatar} />
        <View style={styles.participantInfo}>
          <Text style={styles.participantName}>{item.name}</Text>
          {item.phoneNumber && (
            <Text style={styles.followerPhoneNumber}>{item.phoneNumber}</Text>
          )}
        </View>
        <EllipsisVertical size={20} color="#999" />
      </View>
    );
  }, []);

  const handleAddMember = () => {
    router.push('/searchFriends');
  };

  return (
    <SafeAreaView style={[styles.container]} >
     
     {/* <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <UserInfoCard/>

        <View style={styles.followOptions}>
          <TouchableOpacity style={[styles.followButton, styles.activeButton]}>
            <Text style={[styles.followButtonText, styles.activeButtonText]}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Following</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.followersList}>
          <FlatList
            data={followers}
            renderItem={({ item, index }) => {
              const isLast = index === followers.length - 1;
              return (
                <View
                  key={item.id}
                  style={[
                    styles.participantItem,
                    !isLast && { borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
                  ]}
                >
                  <Image source={{ uri: item.avatar }} style={styles.participantAvatar} />
                  <View style={styles.participantInfo}>
                    <Text style={styles.participantName}>{item.name}</Text>
                    {item.phoneNumber && (
                      <Text style={styles.followerPhoneNumber}>{item.phoneNumber}</Text>
                    )}
                  </View>
                  <EllipsisVertical size={20} color="#999" />
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView> */}

      <Tabs.Container
        renderHeader={()=> <UserInfoCard style={{marginHorizontal: 10}}/>}
        headerHeight={250}
        headerContainerStyle={{
          backgroundColor: "#fff",
          elevation: 0,      
          shadowOpacity: 0,    
          borderBottomWidth: 0, 
          paddingTop: 10,

          // borderBottomWidth: 1,
          // borderBottomColor: "#e0e0e0",
        }}
        
        renderTabBar={
          (props) => (
            <MaterialTabBar {...props} indicatorStyle={{
              backgroundColor: '#0c3141', 
            }} style={{ backgroundColor: '#f5f5f5', marginHorizontal: 10, marginBottom: 10, borderRadius: 7 }}/>
          )
        }
      >
        <Tabs.Tab name="Followers" label="Followers">
          <View style={[styles.followersList, {marginTop: 10}]}>
            <Tabs.FlatList
              data={followers}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                const isLast = index === followers.length - 1;
                const isFirst = index === 0;
                return (
                  // <View
                  //   key={item.id}
                  //   style={[
                  //     styles.participantItem,
                  //     !isLast && { borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
                  //   ]}
                  // >
                  //   <Image source={{ uri: item.avatar }} style={styles.participantAvatar} />
                  //   <View style={styles.participantInfo}>
                  //     <Text style={styles.participantName}>{item.name}</Text>
                  //     {item.phoneNumber && (
                  //       <Text style={styles.followerPhoneNumber}>{item.phoneNumber}</Text>
                  //     )}
                  //   </View>
                  //   <EllipsisVertical size={20} color="#999" />
                  // </View>
                  <FriendItem item={item} index={index} isActionFollow={false} isLast={isLast}/>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>
        </Tabs.Tab>
        <Tabs.Tab name="Following" label="Following">
          <View style={[styles.followersList, {marginTop: 10}]}>
            <Tabs.FlatList
              data={followers}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                const isLast = index === followers.length - 1;
                const isAldreadyFollow = (index % 2) || (index % 3) == 0;
                return (
                  <FriendItem item={item} index={index} isActionFollow={true} isAldreadyFollow={isAldreadyFollow} isLast={isLast}/>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>
        </Tabs.Tab>
      </Tabs.Container>


      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddMember}>
          <Text style={styles.addButtonText}>Add a follower</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F6F6F6',
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  followOptions: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.05,
    // shadowRadius: 4,
    // elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
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
  followersList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    // paddingHorizontal: 20,
    // marginHorizontal: 50,
    width: wp(96),
    marginHorizontal: "auto",
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },



  addFriendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 10,
  },
  addFriendText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0c3141',
    marginLeft: 10,
  },
  footer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  addButton: {
    backgroundColor: '#0c3141',
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },
});