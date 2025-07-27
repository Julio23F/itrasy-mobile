import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';

import api from "../config/api";

export default function usePushNotifications() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      if (token) {
        setExpoPushToken(token);
        // 🔐 Envoi du token à ton backend Django via Axios
        api.post('https://discretion-responses-turned-viewed.trycloudflare.com/api/v1/member/save-expo-token/', {
          token: token,
        })
        .then(response => {
          console.log('Token enregistré avec succès');
          console.log('Token,', token);
        })
        .catch(error => {
          console.error('Erreur lors de l’envoi du token :', error);
        });
      }
    });

    // Listener pour notification reçue en premier plan
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log("📩 Notification reçue :", notification);
    });

    // Listener pour réponse à une notification
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("👆 Réponse utilisateur :", response);
    });

    // return () => {
    //   Notifications.removeNotificationSubscription(notificationListener.current);
    //   Notifications.removeNotificationSubscription(responseListener.current);
    // };
  }, []);

  return expoPushToken;
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Permission refusée pour les notifications push.');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  } else {
    alert('Les notifications ne fonctionnent que sur un appareil physique.');
  }
}
