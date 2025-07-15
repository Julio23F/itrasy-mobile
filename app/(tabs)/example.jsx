import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { MaterialTabBar, Tabs } from 'react-native-collapsible-tab-view';

const HEADER_HEIGHT = 250;

const DATA = [0, 1, 2, 3, 4];
const identity = (v) => v + '';

const Header = () => {
  return <View style={styles.header} />;
};

const Example = () => {
  const renderItem = useCallback(({ index }) => {
    return (
      <View
        style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]}
      />
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <Tabs.Container
        renderHeader={Header}
        headerHeight={HEADER_HEIGHT}
        renderTabBar={(props) => <MaterialTabBar {...props} />}
      >
        <Tabs.Tab name="A" label="A">
          <Tabs.FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={identity}
          />
        </Tabs.Tab>
        <Tabs.Tab name="B" label="B">
          <Tabs.ScrollView>
            <View style={[styles.box, styles.boxA]} />
            <View style={[styles.box, styles.boxB]} />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F6F6F6',
    backgroundColor: '#f9fafb',
    paddingTop: 60,
  },
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
});

export default Example;
