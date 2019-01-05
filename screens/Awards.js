import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,FlatList} from 'react-native';
import AwardItem from './components/AwardItem'

let dummyAwards=[{name: 'fast'}, {name: 'participation'}, {name: '10km'}, {name: '11km'}, {name: '12km'}, {name: '13km'},{name: 'fast'}, {name: 'participation'}, {name: '10km'}, {name: '11km'}, {name: '12km'}, {name: '13km'},{name: 'fast'}, {name: 'participation'}, {name: '10km'}, {name: '11km'}, {name: '12km'}, {name: '13km'}]

export default class Awards extends Component{
  render() {
    return (
			<View style={styles.container}>
				<Text style={styles.Name}>Awards</Text>
				<View style={styles.awardList}>
					<FlatList
					style={styles.awardList}
					data={dummyAwards}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({item}) => <AwardItem award={item.name}/>}
					/>
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
	  width:'95%'
  }
});
