import { Slot, useRootNavigationState, useRouter, useSegments } from 'expo-router';
// import { AuthContextProvider, useAuth } from '../context/authContext';
// import { UnreadMessagesProvider } from '../context/UnreadMessagesContext';
import { useEffect } from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";

const MainLayout = () => {
  // const {isAuthentificated} = useAuth();
  const {isAuthentificated} = {isAuthentificated: false};

  const router = useRouter();
  const navigationState = useRootNavigationState();
  const segments = useSegments();

  useEffect(() => {
    console.log("segments", segments)

    if (!navigationState?.key) return;
    
    if (typeof isAuthentificated === 'undefined') return;

    const inTabs = segments[0] == '(tabs)';
    
    if (isAuthentificated && !inTabs){
      //redirect to messages
      // router.replace("messages");
    }
    else if(isAuthentificated == false) {
      // redirect to login
      // router.replace("/auth/signIn");

      const timeout = setTimeout(() => {
        // router.replace("/auth/signIn");
        router.replace("/(tabs)");
      }, 3000);

    }

  },[isAuthentificated])  
  return <Slot />
}

// const RootLayout = () => {
//   return (
//     <AuthContextProvider>
//        <UnreadMessagesProvider>
//         <MainLayout />
//        </UnreadMessagesProvider>
//     </AuthContextProvider>
//   )
// }
const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <MainLayout />

    </SafeAreaProvider>
  )
}

export default RootLayout;
