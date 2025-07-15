import { createContext, useContext, useEffect, useState } from 'react';
// import { collectionGroup, onSnapshot, query, where } from 'firebase/firestore';
// import { db } from '../firebaseConfig'; 
// import { useAuth } from './authContext'; 

const UnreadMessagesContext = createContext();

export const useUnreadMessages = () => useContext(UnreadMessagesContext);

export const UnreadMessagesProvider = ({ children }) => {
  const { user } = useAuth();
  const [unreadCount, setUnreadCount] = useState(1);

  useEffect(() => {
    if (!user?.uid) return;

    // const q = query(
    //   collectionGroup(db, 'messages'),
    //   where('read', '==', false),
    //   where('receiverId', '==', user.uid)
    // );

    // const unsubscribe = onSnapshot(q, (snapshot) => {
    //   setUnreadCount(snapshot.size);
    // });

    // return () => unsubscribe();
  }, [user?.uid]);

  return (
    <UnreadMessagesContext.Provider value={{ unreadCount }}>
      {children}
    </UnreadMessagesContext.Provider>
  );
};
