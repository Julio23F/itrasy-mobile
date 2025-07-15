import { ArrowLeft, Plus, Search, UserPlus } from 'lucide-react-native';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function AddFriendsScreen() {
  const suggestedFriends = [
    {
      id: '1',
      name: 'Jane',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      id: '2',
      name: 'Wade',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      id: '3',
      name: 'Cameron',
      avatar: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      id: '4',
      name: 'Brooklyn',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      id: '5',
      name: 'Jacob',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  const friends = [
    {
      id: '1',
      name: 'Emma',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'quicksplit',
    },
    {
      id: '2',
      name: 'David',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'invite',
    },
    {
      id: '3',
      name: 'Olivia',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'quicksplit',
    },
    {
      id: '4',
      name: 'Noah',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'quicksplit',
    },
    {
      id: '5',
      name: 'Sarah',
      avatar: 'https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'invite',
    },
    {
      id: '6',
      name: 'Johnson',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'quicksplit',
    },
  ];

  const getInitials = (name) => {
    return name.charAt(0).toUpperCase();
  };

  const getInitialsColor = (name) => {
    const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Friends</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#9ca3af" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or phone number"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Suggested Friends */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.suggestedContainer}>
          {suggestedFriends.map((friend) => (
            <View key={friend.id} style={styles.suggestedFriend}>
              <Image source={{ uri: friend.avatar }} style={styles.suggestedAvatar} />
              <Text style={styles.suggestedName}>{friend.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Friends List */}
        <View style={styles.friendsList}>
          {friends.map((friend) => (
            <View key={friend.id} style={styles.friendItem}>
              <View style={styles.friendAvatarContainer}>
                {friend.name === 'David' || friend.name === 'Sarah' ? (
                  <View style={[styles.initialsAvatar, { backgroundColor: getInitialsColor(friend.name) }]}>
                    <Text style={styles.initialsText}>{getInitials(friend.name)}</Text>
                  </View>
                ) : (
                  <Image source={{ uri: friend.avatar }} style={styles.friendAvatar} />
                )}
              </View>
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>{friend.name}</Text>
                <Text style={styles.friendStatus}>
                  {friend.status === 'quicksplit' ? 'In QuickSplit' : 'Invite to App'}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  friend.status === 'invite' && styles.inviteButton
                ]}
              >
                {friend.status === 'quicksplit' ? (
                  <>
                    <Plus size={16} color="#059669" />
                    <Text style={styles.addButtonText}>Add</Text>
                  </>
                ) : (
                  <>
                    <UserPlus size={16} color="#059669" />
                    <Text style={styles.addButtonText}>Invite</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          ))}
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
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  suggestedContainer: {
    marginBottom: 20,
  },
  suggestedFriend: {
    alignItems: 'center',
    marginRight: 20,
  },
  suggestedAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  suggestedName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  friendsList: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  friendAvatarContainer: {
    marginRight: 15,
  },
  friendAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  initialsAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  friendStatus: {
    fontSize: 14,
    color: '#6b7280',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0fdf4',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#059669',
  },
  inviteButton: {
    backgroundColor: '#f0fdf4',
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#059669',
    marginLeft: 4,
  },
});