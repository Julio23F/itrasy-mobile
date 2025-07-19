import { ArrowLeft, Plus, Search, UserPlus } from 'lucide-react-native';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import FriendItem from "../../../components/FriendItem";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { router, Link } from 'expo-router';
import { getUsers } from "../../../services/fetchData";
import { followUser } from "../../../services/followServices";
import { useState, useEffect } from 'react';
import { useSession } from "../../../context/authContext";
import {checkIfFollowedById} from "../../../utils/member";

export default function SearchFriends() {
  const { user } = useSession();

  const [search, setSearch] = useState("");
  const [members, setMembers] = useState([]);


  const searchUser = async () => {
    try {
      const userData = await getUsers({ first_name: search});

      if (userData) {
        setMembers(userData.dataset);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur", error);
    }
  };


  const followUserList = async (userId) => {
    try {
      const response = await followUser([userId]);
  
      if (response.followed) {
        const currentUser = user;

        const updatedMembers = members.map((member) => {
          if (member.id === userId) {
            const alreadyExists = member.followers?.some(
              (f) => f.id === currentUser.id
            );
  
            return {
              ...member,
              followers: alreadyExists
                ? member.followers
                : [...(member.followers || []), currentUser],
            };
          }
          return member;
        });
  
        setMembers(updatedMembers);
      }
  
    } catch (error) {
      console.error("Erreur lors de la mise à jour des followers :", error);
    }
  };
  




  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim().length > 0) {
        searchUser();
      } else {
        setMembers([]);
      }
    }, 300);
  
    return () => clearTimeout(delayDebounce);
  }, [search]);



  const handleBack = () => {
    router.back();
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>
        {/* <Text style={styles.title}>Add Friends</Text> */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#9ca3af" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or phone number"
            placeholderTextColor="#9ca3af"
            value={search}
            onChangeText={setSearch}
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
          {members.length > 0 && (
            members.map((item, index) => {
              const isLast = index === members.length - 1;
              // const isAldreadyFollow = (index % 2) || (index % 3) === 0;
              const isAldreadyFollow = checkIfFollowedById(item, user?.id);
              return (
                <FriendItem 
                  key={index}
                  style={{ width: wp(89) }} 
                  item={item} 
                  index={index} 
                  isLast={isLast}
                  isAldreadyFollow={isAldreadyFollow} 
                  isActionFollow={true}

                  onPress={
                    isAldreadyFollow 
                    ? ()=>followUserList(item.id)
                    : ()=>followUserList(item.id)
                  }
                />
              );
            })
          )}
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