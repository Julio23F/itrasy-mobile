import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import NotificationItem from "../../../components/NotificationItem";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSession } from '../../../context/authContext'; 

// const WEBSOCKET_URL = "wss://scales-madness-tops-laptops.trycloudflare.com";
const WEBSOCKET_URL = "wss://scales-madness-tops-laptops.trycloudflare.com";

const NotificationScreen = () => {
  // const { user } = useFollow();
  const { user } = useSession();

  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(`${WEBSOCKET_URL}/ws/notifications/${user?.id}/`);
    setSocket(ws);

    console.log("user?.id", user?.id)
    ws.onopen = () => {
      console.log('WebSocket connected');
    };
    

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log('Message reçu : ', data);

      setNotifications((prev) => [data, ...prev]);
    };

    ws.onerror = (e) => {
      console.error('WebSocket erreur : ', e.message);
    };

    ws.onclose = (e) => {
      console.log('WebSocket fermé : ', e.code, e.reason);
    };

    return () => {
      ws.close();
    };
  }, [user?.id]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Alert danger</Text>
      <View style={[styles.notificationList]}>
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const isLast = index === notifications.length - 1;

            return (
              <NotificationItem 
                key={index}
                style={{ width: wp(89)}} 
                item={item} 
                index={index} 
                isLast={isLast}
                isAldreadyFollow={false} 
                isActionFollow={true}

                onPress={
                  true 
                  ? ()=>console.log("AldreadyFollow True")
                  : ()=>console.log("AldreadyFollow True")
                }
              />
            )
          }
            
            // <View style={styles.notification}>
            //   <Text>
            //     {item.from.first_name} est à {item.lat}, {item.lon}
            //   </Text>
            // </View>

            
          }
        />
      </View>
      
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "50",
    padding: 16,
    backgroundColor: '#fff',
    paddingHorizontal: "auto"
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 15
  },
  notification: {
    padding: 10,
    marginBottom: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },

  notificationList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: "20",
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

