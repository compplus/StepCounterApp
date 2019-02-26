import React,{Component} from 'react'
import {StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GoBack extends Component{
    render(){
        let {visible,goback}=this.props
        if(!visible)return null
        return(
            <Button
                containerStyle={styles.container}
                onPress={goback}
                icon={
                    <Icon
                      name="arrow-left"
                      size={25}
                      color="rgba(0,0,0,0.5)"
                    />
                  }
            />
        )
    }
}

const styles=StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        top:'50%'
    }
})