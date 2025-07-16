import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const Profile =()=>{
    return (
        <View style={styles.header}>
            <Text> Y-TRASY</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    color :'#ffffff',
    backgroundColor :'#ffffff',
    flex : 1, 
  }
    }
)

export default Profile