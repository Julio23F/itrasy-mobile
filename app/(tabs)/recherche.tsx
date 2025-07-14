import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const horizontalSuggestions = [
  { id: '1', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { id: '2', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: '3', avatar: 'https://randomuser.me/api/portraits/women/14.jpg' },
  { id: '4', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { id: '5', avatar: 'https://randomuser.me/api/portraits/women/16.jpg' },
  { id: '6', avatar: 'https://randomuser.me/api/portraits/men/20.jpg' },
];

const verticalSuggestions = [
  { id: '7', name: 'Léa Morel', avatar: 'https://randomuser.me/api/portraits/women/18.jpg' },
  { id: '8', name: 'Julien Henry', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: '9', name: 'Anaïs Dupuis', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' },
  { id: '10', name: 'Victor Caron', avatar: 'https://randomuser.me/api/portraits/men/25.jpg' },
  { id: '11', name: 'Chloé Mercier', avatar: 'https://randomuser.me/api/portraits/women/26.jpg' },
];

const RechercheScreen = () => {
  return (
    <View style={styles.container}>
      {/* Flèche retour */}
      <View style={styles.header}>
        <Link href="./view" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#242A2A" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Recherche</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Barre de recherche */}
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un ami..."
          placeholderTextColor="#888"
        />

        {/* Suggestions horizontales */}
        <Text style={styles.sectionTitle}>Suggestions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {horizontalSuggestions.map((item) => (
            <Image
              key={item.id}
              source={{ uri: item.avatar }}
              style={styles.storyAvatar}
            />
          ))}
        </ScrollView>

        {/* Suggestions verticales */}
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Autres personnes</Text>
        {verticalSuggestions.map((user) => (
          <View key={user.id} style={styles.card}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF1FF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
    padding: 6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#242A2A',
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: '#242A2A',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#6DB1FF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#242A2A',
    marginBottom: 12,
  },
  horizontalList: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#6DB1FF',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
    borderWidth: 2,
    borderColor: '#6DB1FF',
  },
  userInfo: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#242A2A',
  },
  addButton: {
    backgroundColor: '#6DB1FF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default RechercheScreen;
