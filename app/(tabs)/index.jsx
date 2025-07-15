import { EllipsisVertical, QrCode } from 'lucide-react-native';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function followBillScreen() {
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.userInfoCard}>
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

        {/* Follow Options */}
        <View style={styles.followOptions}>
          <TouchableOpacity style={[styles.followButton, styles.activeButton]}>
            <Text style={[styles.followButtonText, styles.activeButtonText]}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Following</Text>
          </TouchableOpacity>
        </View>

        {/* followers List */}
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
            // contentContainerStyle={styles.listContent}
          />

          {/* <TouchableOpacity style={styles.addFriendButton}>
            <Plus size={24} color="#0c3141" />
            <Text style={styles.addFriendText}>Add a Friend</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>

      {/* add Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
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
    paddingTop: 60,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
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
    flex: 1,
    paddingVertical: 12,
    borderRadius: 7,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#0c3141',
  },
  followButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  activeButtonText: {
    color: '#ffffff',
  },
  followersList: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 20,
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
  participantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
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