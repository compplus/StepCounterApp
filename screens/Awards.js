import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,FlatList, Image} from 'react-native';
import AwardItem from './components/AwardItem';

let json=[{title: 'Awesome Walker',
          description: 'Walk 10 km',
          imageuri: require('../assets/award_page/20km.png'),
          status: '50%'},

          {title: 'Start Walking',
          description: 'Open the app',
          imageuri: require('../assets/award_page/100km.png'),
          status: 'Awarded'},


          {title: 'HKU Walker',
          description: 'Walk in HKU',
          imageuri: require('../assets/award_page/hku.png'),
          status: 'Awarded'},

          {title: 'Morning Walker',
          description: 'Walk in the morning',
          imageuri: require('../assets/award_page/earlybird.png'),
          status: 'Awarded'},

          {title: 'Walking Master',
          description: 'Submit your record',
          imageuri: require('../assets/award_page/dumbbell.png'),
          status: 'Get'},

          {title: 'Calories burner',
          description: 'burn 1000 kcal',
          imageuri: require('../assets/award_page/burn.png'),
          status: 'Awarded'},
          ]

export default class Awards extends Component{
  render() {
    return (
			<View style={styles.container}>
				<Text style={styles.Name}>Trophy</Text>
				<View style={styles.awardList}>
					<FlatList
					style={styles.awardList}
					data={json}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({item}) =>
            <AwardItem
              title={item.title}
              description={item.description}
              imageuri={item.imageuri}
              status={item.status}
            />
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
    backgroundColor: '#60D4E1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  awardList:{
	  flex:1,
	  width:'95%',
  }
});
