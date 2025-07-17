import { ArrowLeft, Plus, Search, UserPlus } from 'lucide-react-native';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import FriendItem from "../../components/Friends/FriendItem";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function SearchFriends() {
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


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>
        {/* <Text style={styles.title}>Add Friends</Text> */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#9ca3af" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or phone number"
            placeholderTextColor="#9ca3af"
          />
        </View>
        {/* <View style={styles.placeholder} /> */}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.friendsList, {marginTop: 10}]}>
          {/* <FlatList
            data={followers}
            renderItem={({ item, index }) => {
              const isLast = index === followers.length - 1;
              const isAldreadyFollow = (index % 2) || (index % 3) == 0;
              return (
                <FriendItem style={{width: wp(89),}} item={item} isAldreadyFollow={isAldreadyFollow} isLast={isLast}/>
              );
            }}
            keyExtractor={(item, index) => index}
          /> */}
          {
            followers.map((item, index) => {
              const isLast = index === followers.length - 1;
              const isAldreadyFollow = (index % 2) || (index % 3) == 0;
              return (
                <FriendItem style={{width: wp(89),}} item={item} isAldreadyFollow={isAldreadyFollow} isLast={isLast}/>
              );
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    // paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    padding: 4,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
  // placeholder: {
  //   width: 32,
  // },
  content: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 3,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    // flex: 1,
    // width: wp(70),
    fontSize: 13,
    color: '#111827',
  },
  friendsList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: wp(96),
    marginHorizontal: "auto",
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
});