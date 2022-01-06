import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Header from './src/Header';
import List from './src/List';

import data from './data.json';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => <List data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
