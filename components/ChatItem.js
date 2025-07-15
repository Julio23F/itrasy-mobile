import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { getRoomId } from '../utils/room';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useAuth } from '../context/authContext';
import { useEffect, useState } from 'react';
import {formatMessageDate} from '../utils/time';
import { Check } from 'lucide-react-native';

const ChatItem = ({ item, router }) => {
  const {user} = useAuth();
  const [lastMessage, setLastMessage] = useState(undefined);

  const openChatRoom = () => {
    console.log("Navigation", `/chat/${item.userId}`)
    router.push({pathname: `/chat/${item.userId}`, params: item});
  }

  const getLastMessage = () => {
    const roomId = getRoomId(user?.uid, item.userId);
    const docRef = doc(db, "rooms", roomId);
    const messagesRef = collection(docRef, "messages");

    const q = query(messagesRef, orderBy("createdAt", "desc"));
    let unreadMessage = 0;
    // onSnapshot (écoute en temps réel)
    const unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map(doc => {
        if(!doc.data().read) unreadMessage++;
        return doc.data();
      });

      setLastMessage(allMessages[0] ? {...allMessages[0], unreadMessage} : null);
    });

    return unsub;
  }

  const renderLastMessage = (lastMessage) => {
    let message;
    const isRead = lastMessage?.read;
    const iReceive = user?.uid !== lastMessage?.userId;
    if(typeof lastMessage == "undefined") {
      message = "Loading ...";
    }
    else{
      if(lastMessage){
        if(user?.uid == lastMessage?.userId) {
          message =  "Vous: "+lastMessage?.text;
        }
        else{
          message = lastMessage?.text;
        }
      }
      else{
        message = "Dis lui Akoyo 👋";
      }
    }

    return (
      <Text 
          style={[
            styles.lastMessage,
            !isRead && iReceive ? styles.unreadMessage : null,
            { paddingRight: 10 }
          ]}
          numberOfLines={1}
      >
        {message}
      </Text>
    )
  }

  const renderMessageStatus = (lastMessage) => {

    if(lastMessage?.userId === user?.uid){
      // if(false){
      return (
        <View
          style={[
            styles.circleIndicatorContainer,
            !lastMessage?.read && styles.circleIndicatorUnread
          ]}
        >
          <Check size={10} color={lastMessage?.read ? "#fff" : "#736afb"} />
        </View>
      );
    }
    else if(lastMessage?.unreadMessage){
      return (
        <View
          style={[
            styles.unreadContainNumber
          ]}
        >
          <Text style={ styles.unreadMessageNumber}>{lastMessage?.unreadMessage}</Text> 
        </View>
      )
    }
    return null;
      
  }


  useEffect(() =>{
    getLastMessage();

  }, []);

  return (
    <Pressable onPress={openChatRoom} style={styles.chatItem}>
      {/* <Image source={{ uri: item.avatar }} style={styles.avatar} /> */}
      <Image
        source={{ uri: (item?.avatar ? `data:image/jpeg;base64,${item.avatar}` : "https://cdn-icons-png.flaticon.com/512/149/149071.png") }}
        style={styles.avatar}
      />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.name}>{item.username}</Text>
          <Text style={styles.timestamp}>
            {lastMessage && formatMessageDate(lastMessage?.createdAt)}
          </Text>
        </View>
        {/* <Text 
          style={[
            styles.lastMessage,
            item.unread && styles.unreadMessage
          ]}
          numberOfLines={1}
        >
          {lastMessage && renderLastMessage(lastMessage)}
        </Text> */}
        {renderLastMessage(lastMessage)}

        {renderMessageStatus(lastMessage)}
        

        
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    chatItem: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        marginRight: 12,
    },
    messageContent: {
        flex: 1,
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
      },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    timestamp: {
        fontSize: 14,
        color: '#666',
    },
    lastMessage: {
        fontSize: 15,
        color: '#666',
    },
    unreadMessage: {
        color: '#000',
        fontWeight: '500',
    },

    // circleIndicator: {
    //   position: 'absolute',
    //   bottom: 5,
    //   right: 0,
    //   width: 12,
    //   height: 12,
    //   borderRadius: 6,
    // },

    circleIndicatorContainer: {
      borderWidth: 1,
      borderColor: '#736afb',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#736afb",

      position: 'absolute',
      bottom: 5,
      right: 0,
      width: 16,
      height: 16,
      borderRadius: 10,
    },
    
    circleIndicatorUnread: {
      borderColor: 'gray',
      backgroundColor: "transparent",
    },

    unreadContainNumber: {
      borderWidth: 2,
      borderColor: '#736afb',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "transparent",

      position: 'absolute',
      bottom: 5,
      right: 0,
      width: 19,
      height: 19,
      borderRadius: 10,
    },
    unreadMessageNumber: {
      color: "#736afb",
      fontWeight: "bold",
      marginTop: -2
    }
    
})
export default ChatItem;