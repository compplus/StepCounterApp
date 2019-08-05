import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,FlatList, Image} from 'react-native';
import AwardItem from '../components/AwardItem';

let json=[

          {title: 'Start Walking',
          description: 'Walk 1 km',
          imageuri: require('../assets/award_page/1km.png'),
          status: true},

          {title: 'Rookie Walker',
          description: 'Walk 20 km',
          imageuri: require('../assets/award_page/20km.png'),
          status: true},

          {title: 'Awesome Walker',
          description: 'Walk 100 km',
          imageuri: require('../assets/award_page/100km.png'),
          status: true},

          {title: 'Training Master',
          description: 'Submit your record',
          imageuri: require('../assets/award_page/weight.png'),
          status: true},

          {title: 'Burn Calories',
          description: 'burn 1000 kcal',
          imageuri: require('../assets/award_page/burning.png'),
          status: true},

          {title: 'Morning Walker',
          description: 'Walk before 8am',
          imageuri: require('../assets/award_page/earlybird.png'),
          status: false},

          {title: 'HKU Walker',
          description: 'Walk in HKU',
          imageuri: require('../assets/award_page/hku.png'),
          status: false},

          {
            status: false
          },

          {
            status: false
          },

          ]

export default class Awards extends Component{
  render() {
    return (
			<View style={styles.container}>
				<View style={styles.awardList}>
					<FlatList
					style={{flex:1}}
          numColumns= {3}
          initialNumToRender={12}
					data={json}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
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
    backgroundColor: '#171D33',
	   alignItems:'center'
  },

  awardList:{
	  flex:1,
	  width:'95%'
  },

});
