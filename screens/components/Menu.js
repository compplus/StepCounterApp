import React,{Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  ImageBackground
} from 'react-native';
import {Button,Icon} from 'react-native-elements'
import {Images} from '../../assets/assets.js'

const window = Dimensions.get('window');

export default class Menu extends Component{
  state={selected:'Home'}

  menuItem=({item}) =>{
    const {selected} = this.state
    const {onItemSelected} = this.props
    const isSelected=(item.title==selected)
    const color = isSelected?'#008000':'rgb(50,50,50)'

    return (
    <Button
      icon={
        <Icon
          {...item.icon}
          color={color}
          size={25}
        />
      }
      raised={isSelected}
      buttonStyle={styles.button}
      titleStyle={{color:color,marginLeft:10}}
      title={item.title}
      backgroundColor="transparent"
      onPress={() => {this.setState({selected:item.title});onItemSelected(item.screen)}}
    />)
  }

  render(){
    const userName="User Name"
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.HeadImage} source={Images['header_image']} resizeMode='cover'>
        <Text style={styles.userName}>{userName}</Text>
        </ImageBackground>
        <FlatList
            style={styles.container}
            data={screensOnMenu}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={this.menuItem}
            extraData={this.state}
				/>
      </View>
    );
  }
}

const screensOnMenu=[{screen:"In",title:'Home',icon:{name:'home'}},
{screen:"Info",title:'Info',icon:{name:'heartbeat',type:'font-awesome'}},
{screen:"Setting",title:'Setting',icon:{name:'settings'}}]

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor:"transparent",
    justifyContent:'flex-start',
    marginVertical:5,
    padding:15
  },
  HeadImage:{
    height:150
  },
  userName:{
    position:'absolute',
    bottom:'5%',
    left:'5%',
    fontWeight:'bold'
  }
});