import { StyleSheet, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
      Text de Julio
    </Text>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
