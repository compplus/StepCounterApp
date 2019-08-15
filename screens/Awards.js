import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, Image } from 'react-native';
import AwardItem from '../components/AwardItem';

let json = [

  {
    title: 'Start Walking',
    description: 'Walked 10,000 steps',
    imageuri: require('../assets/awards_page/steps.png'),
    status: true
  },

  {
    title: 'Rookie Walker',
    description: 'Walked 100,000 steps',
    imageuri: require('../assets/awards_page/steps2.0.png'),
    status: true
  },

  {
    title: 'Awesome Walker',
    description: 'Walked 300,000 steps',
    imageuri: require('../assets/awards_page/steps3.0.png'),
    status: true
  },

  {
    title: 'Movin\' On',
    description: 'Walked 500,000 steps',
    imageuri: require('../assets/awards_page/steps_bronze.png'),
    status: true
  },

  {
    title: 'Keep it Up',
    description: 'Walked 750,000 steps',
    imageuri: require('../assets/awards_page/steps_silver.png'),
    status: true
  },

  {
    title: 'You Made It!',
    description: 'Walked 1,000,000 steps',
    imageuri: require('../assets/awards_page/steps_gold.png'),
    status: true
  },

  {
    title: 'Early Bird',
    description: 'Accumulated steps during 05:00-08:00 > 100,000',
    imageuri: require('../assets/awards_page/earlybird.png'),
    status: true
  },

  {
    title: 'Night Owl',
    description: 'Accumulated steps during 20:00-00:00 > 100,000',
    imageuri: require('../assets/awards_page/owl.png'),
    status: true
  },

  {
    title: 'Weekend Motivation',
    description: 'Accumulated steps on SAT and SUN > 100,000',
    imageuri: require('../assets/awards_page/weekend.png'),
    status: true
  },

  {
    title: 'I\'m Burning',
    description: '100,000 calories burnt',
    imageuri: require('../assets/awards_page/burn.png'),
    status: true
  },

  {
    title: 'Shape Your Body',
    description: '1,000,000 calories burnt',
    imageuri: require('../assets/awards_page/burn2.0.png'),
    status: true
  },

  {
    title: 'We are on the Same Boat',
    description: 'Successfully formed a team',
    imageuri: require('../assets/awards_page/team.png'),
    status: true
  },
]

export default class Awards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.awardList}>
          <FlatList
            style={{ flex: 1 }}
            numColumns={3}
            initialNumToRender={12}
            data={json}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={{ flex: 2, marginTop: 8, marginBottom: 8 }}>
                <AwardItem
                  title={item.title}
                  description={item.description}
                  imageuri={item.imageuri}
                  status={item.status}
                />
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center'
  },

  awardList: {
    flex: 1,
    width: '95%',
  },

});
