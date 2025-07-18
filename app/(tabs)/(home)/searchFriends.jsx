// import { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
// import { router } from 'expo-router';
// import { ArrowLeft, Search, User } from 'lucide-react-native';

// const SEARCH_RESULTS = [
//   { id: '1', name: 'Alice Cooper', email: 'alice@example.com', role: 'Designer' },
//   { id: '2', name: 'Bob Martin', email: 'bob@example.com', role: 'Developer' },
//   { id: '3', name: 'Carol Davis', email: 'carol@example.com', role: 'Manager' },
//   { id: '4', name: 'David Lee', email: 'david@example.com', role: 'Analyst' },
//   { id: '5', name: 'Eva Green', email: 'eva@example.com', role: 'Writer' },
// ];

// interface SearchResult {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// const SearchResultItem = ({ result }: { result: SearchResult }) => (
//   <TouchableOpacity style={styles.resultItem}>
//     <View style={styles.resultIcon}>
//       <User size={20} color="#007AFF" />
//     </View>
//     <View style={styles.resultInfo}>
//       <Text style={styles.resultName}>{result.name}</Text>
//       <Text style={styles.resultEmail}>{result.email}</Text>
//       <Text style={styles.resultRole}>{result.role}</Text>
//     </View>
//   </TouchableOpacity>
// );

// export default function SearchScreen() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [results, setResults] = useState<SearchResult[]>([]);

//   const handleBack = () => {
//     router.back();
//   };

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     if (query.trim()) {
//       const filtered = SEARCH_RESULTS.filter(
//         (item) =>
//           item.name.toLowerCase().includes(query.toLowerCase()) ||
//           item.email.toLowerCase().includes(query.toLowerCase()) ||
//           item.role.toLowerCase().includes(query.toLowerCase())
//       );
//       setResults(filtered);
//     } else {
//       setResults([]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={handleBack}>
//           <ArrowLeft size={24} color="#007AFF" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Add Member</Text>
//         <View style={styles.placeholder} />
//       </View>

//       <View style={styles.searchContainer}>
//         <View style={styles.searchBar}>
//           <Search size={20} color="#8e8e93" />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search members..."
//             value={searchQuery}
//             onChangeText={handleSearch}
//             placeholderTextColor="#8e8e93"
//           />
//         </View>
//       </View>

//       <FlatList
//         data={results}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <SearchResultItem result={item} />}
//         contentContainerStyle={styles.resultsContainer}
//         showsVerticalScrollIndicator={false}
//         ListEmptyComponent={
//           searchQuery ? (
//             <View style={styles.emptyState}>
//               <Text style={styles.emptyText}>No results found for "{searchQuery}"</Text>
//             </View>
//           ) : (
//             <View style={styles.emptyState}>
//               <Text style={styles.emptyText}>Start typing to search for members</Text>
//             </View>
//           )
//         }
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 60,
//     paddingBottom: 20,
//     backgroundColor: '#ffffff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e5e5',
//   },
//   backButton: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#1c1c1e',
//   },
//   placeholder: {
//     width: 44,
//   },
//   searchContainer: {
//     padding: 20,
//     backgroundColor: '#ffffff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e5e5',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 12,
//     fontSize: 16,
//     color: '#1c1c1e',
//   },
//   resultsContainer: {
//     padding: 20,
//   },
//   resultItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: 16,
//     marginBottom: 12,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   resultIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#f0f7ff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   resultInfo: {
//     flex: 1,
//   },
//   resultName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#1c1c1e',
//     marginBottom: 4,
//   },
//   resultEmail: {
//     fontSize: 14,
//     color: '#8e8e93',
//     marginBottom: 2,
//   },
//   resultRole: {
//     fontSize: 12,
//     color: '#007AFF',
//     fontWeight: '500',
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#8e8e93',
//     textAlign: 'center',
//   },
// });

import { ArrowLeft, Plus, Search, UserPlus } from 'lucide-react-native';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import FriendItem from "../../../components/FriendItem";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { router, Link } from 'expo-router';


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
      telnumber: '+261 32 05 138 45',
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
      telnumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      telnumber: '+261 32 05 138 45',
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
      telnumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      telnumber: '+261 32 05 138 45',
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
      telnumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      telnumber: '+261 32 05 138 45',
    },
    {
      id: '3',
      name: 'Wade Warren',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      telnumber: '+261 32 05 138 45',
    },
    {
      id: '4',
      name: 'Cameron Williamson',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      telnumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      telnumber: '+261 32 05 138 45',
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
      telnumber: '+261 32 05 138 45',
    },
    {
      id: '2',
      name: 'Jane Cooper',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      amount: 37.67,
      telnumber: '+261 32 05 138 45',
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
      telnumber: '+261 32 05 138 45',
    },
  ];


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
                <FriendItem style={{width: wp(89),}} item={item} index={index} isAldreadyFollow={isAldreadyFollow} isLast={isLast}/>
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