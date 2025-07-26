import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import React from "react";
import { SessionProvider, useSession } from "../context/authContext";
import { Slot, useRouter, useSegments } from 'expo-router';

import { Text, View, SafeAreaView } from "react-native";
import { MenuProvider } from 'react-native-popup-menu';
import { FollowProvider } from '../context/followContext';

import usePushNotifications from '../hooks/usePushNotifications';

const MainLayout = () => {
  usePushNotifications();

  const { session, isLoading } = useSession();
  
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {

    console.log("segments", segments[0]);

    if (!router || isLoading) return;

    const inTabs = segments[0] === '(tabs)';

    if (session && !inTabs) {
      router.replace("(tabs)/(home)");
    } else if (session === null) {
      router.replace("auth/signIn");
    }
  }, [session, segments]);

  return <Slot />;
};



const RootLayout = () => {

  return (
    <SessionProvider>
      <FollowProvider>
        <MenuProvider>
        {/* <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="auth/signIn" />
          <Stack.Screen name="auth/signUp" />
        </Stack>
        <StatusBar style="light" /> */}
          <MainLayout />
        </MenuProvider>
      </FollowProvider>
    </SessionProvider>
  );
}

export default RootLayout;

