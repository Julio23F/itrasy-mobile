// import { Tabs } from 'expo-router';
// import { Receipt, Users } from 'lucide-react-native';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#ffffff',
//           borderTopWidth: 1,
//           borderTopColor: '#e5e7eb',
//         },
//         tabBarActiveTintColor: '#059669',
//         tabBarInactiveTintColor: '#9ca3af',
//       }}>
//       <Tabs.Screen
//         name="(home)"
//         options={{
//           title: 'Home Page',
//           tabBarIcon: ({ size, color }) => (
//             <Receipt size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="(map)"
//         options={{
//           title: 'Exemple',
//           tabBarIcon: ({ size, color }) => (
//             <Users size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="(profile)"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ size, color }) => (
//             <Users size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }



import { Tabs } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Users, Map, Search, ShoppingBag, UserCog } from 'lucide-react-native';

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getIcon = () => {
          switch (route.name) {
            case '(home)':
              return <Users size={24} color={isFocused ? '#fff' : '#888'} />;
            case '(map)':
              return <Map size={24} color={isFocused ? '#fff' : '#888'} />;
            case '(profile)':
              return <UserCog size={24} color={isFocused ? '#fff' : '#888'} />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={onPress}
          >
            {getIcon()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="(map)" />
      <Tabs.Screen name="(profile)" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#0c3141',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 8,
    marginHorizontal: 3,
    marginBottom: 15,
    // marginTop: 50
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
});