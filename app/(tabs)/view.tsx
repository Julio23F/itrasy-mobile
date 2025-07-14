import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const ViewScreen = () => {
  const [selectedTab, setSelectedTab] = useState<'amis' | 'followers'>('amis');

  const friends = [
    { id: 1, name: 'Jean Dupont', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Marie Martin', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 3, name: 'Pierre Lambert', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 4, name: 'Sophie Bernard', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 5, name: 'Thomas Leroy', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];

  const followers = [
    { id: 1, name: 'Lucie Petit', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 2, name: 'Nicolas Moreau', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 3, name: 'Emma Laurent', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  ];

  const dataToShow = selectedTab === 'amis' ? friends : followers;

  return (
    <View style={styles.container}>
      {/* Profil utilisateur */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/5.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileStatus}>En ligne</Text>
      </View>

      {/* Onglets Amis / Followers avec compte */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'amis' && styles.activeTabButton]}
          onPress={() => setSelectedTab('amis')}
        >
          <Text style={[styles.tabText, selectedTab === 'amis' && styles.activeTabText]}>
            Amis ({friends.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'followers' && styles.activeTabButton]}
          onPress={() => setSelectedTab('followers')}
        >
          <Text style={[styles.tabText, selectedTab === 'followers' && styles.activeTabText]}>
            Followers ({followers.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Liste dynamique */}
      <ScrollView style={styles.listContainer}>
        {dataToShow.map((person) => (
          <View key={person.id} style={styles.friendItem}>
            <Image source={{ uri: person.avatar }} style={styles.friendImage} />
            <Text style={styles.friendName}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bouton Plus */}
      <Link href="./recherche" asChild>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF1FF',
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#6DB1FF',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#242A2A',
  },
  profileStatus: {
    fontSize: 14,
    color: '#6DB1FF',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#D4E6FF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeTabButton: {
    backgroundColor: '#6DB1FF',
  },
  tabText: {
    color: '#242A2A',
    fontWeight: '600',
    fontSize: 16,
  },
  activeTabText: {
    color: 'white',
  },
  listContainer: {
    flex: 1,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#6DB1FF',
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  friendName: {
    fontSize: 16,
    color: '#242A2A',
  },
  plusButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6DB1FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plusText: {
    fontSize: 30,
    color: '#ffffff',
    lineHeight: 30,
  },
});

export default ViewScreen;
