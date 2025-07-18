// import { Slot, useRootNavigationState, useRouter, useSegments } from 'expo-router';
// import { useEffect } from 'react';
// import { SafeAreaProvider } from "react-native-safe-area-context";

// const MainLayout = () => {
//   // const {isAuthentificated} = useAuth();
//   const {isAuthentificated} = {isAuthentificated: false};

//   const router = useRouter();
//   const navigationState = useRootNavigationState();
//   const segments = useSegments();

//   useEffect(() => {
//     console.log("segments", segments)

//     if (!navigationState?.key) return;
    
//     if (typeof isAuthentificated === 'undefined') return;

//     const inTabs = segments[0] == '(tabs)';
    
//     if (isAuthentificated && !inTabs){
//       //redirect to messages
//       // router.replace("messages");
//     }
//     else if(isAuthentificated == false) {
//       // redirect to login
//       // router.replace("/auth/signIn");

//       const timeout = setTimeout(() => {
//         router.replace("/auth/signIn");
//         // router.replace("/(tabs)");
//       }, 3000);

//     }

//   },[isAuthentificated])  
//   return <Slot />
// }

// const RootLayout = () => {
//   return (
//     <SafeAreaProvider>
//       <MainLayout />

//     </SafeAreaProvider>
//   )
// }

// export default RootLayout;

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import React from "react";
import { SessionProvider } from "../context/authContext";


export default function RootLayout() {

  return (
    <SessionProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth/signIn" />
        <Stack.Screen name="auth/signUp" />
      </Stack>
      <StatusBar style="light" />
    </SessionProvider>
  );
}