import {
    Pressable,
    View,
    Image,
    StyleSheet,
    Text
  } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function ChatRoomHeader({item}) {
    useEffect(()=>{
      console.log("ChatRoomHeader", item.avatar)
    },[])
    const navigation = useNavigation();
    return (
        <View style={styles.customHeader}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                <ArrowLeft size={24} color="#007AFF" />
            </Pressable>

            <View style={styles.headerTitle}>
                {/* <Image
                  source={{
                      uri: item?.avatar,
                  }}
                  style={styles.headerAvatar}
                /> */}
                <Image
                  source={{ uri: (item?.avatar ? `data:image/jpeg;base64,${item.avatar}` : "https://cdn-icons-png.flaticon.com/512/149/149071.png") }}
                  style={styles.headerAvatar}
                />
                <Text style={styles.headerName}>{item.username}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    customHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      },
      
      backButton: {
        marginRight: 15,
      },
      
      headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      
      headerAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12,
      },
      
      headerName: {
        fontSize: 16,
        fontWeight: '600',
      },
      
})