import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { ArrowLeft, ChevronRight, Settings, ShoppingBag, MapPin, Lock, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';
import { useSession } from "../../../context/authContext";
import {formatPhoneNumber} from "../../../utils/telNumber";

const menuItems = [
  // { icon: Settings, title: 'Settings'},
  // { icon: ShoppingBag, title: 'My Orders'},
  // { icon: MapPin, title: 'Address'},
  // { icon: Lock, title: 'Change Password'},
  // { icon: HelpCircle, title: 'Help & Support'},
];

export default function ProfileScreen() {

  const { signOut, user } = useSession();

  const showLogoutAlert = () => {
    Alert.alert("Déconnexion", "Êtes-vous sûr de vouloir vous déconnecter ?", [
      {
        text: "Annuler",
        onPress: () => console.log("cancel logout"),
      },
      {
        text: "Déconnexion",
        onPress: () => signOut(),
        // style: "destructive",
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
        <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
                <Image
                    source={require('../../../assets/images/logo.jpg')}
                    style={styles.avatar}
                />
            </View>
            <Text style={styles.userName}>{user?.last_name} {user?.first_name}</Text>
            <Text style={styles.userHandle}>{formatPhoneNumber(user?.telnumber)}</Text>
            
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Modifier le Profile</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                  key={index}
                  style={[
                  styles.menuItem,
                  // index === menuItems.length - 1 && styles.lastMenuItem
                  ]}
                  onPress={() => onPress={showLogoutAlert}}
              >
                  <View style={styles.menuItemLeft}>
                  <item.icon size={20} color="#000" />
                  <Text style={styles.menuItemText}>{item.title}</Text>
                  </View>
                  <ChevronRight size={20} color="#666" />
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[
                styles.menuItem,
                styles.lastMenuItem
              ]}
              onPress={showLogoutAlert}
            >
              <View style={styles.menuItemLeft}>
                <LogOut size={20} color="#000" />
                <Text style={styles.menuItemText}>Déconnexion</Text>
              </View>
              <ChevronRight size={20} color="#666" />
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  userHandle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  editButton: {
    backgroundColor: '#0c3141',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 16,
    fontWeight: '500',
  },
});