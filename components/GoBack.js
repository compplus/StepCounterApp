import React,{Component} from 'react'
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GoBack extends Component{
    render(){
        let {visible,goto,direction}=this.props
        if(!visible)return null
        return(
            <Button
                buttonStyle={{backgroundColor: 'transparent'}}
                containerStyle={{position:'absolute',top:'50%',[direction]:0}}
                onPress={()=>goto(direction=='left'?-1:1)}
                icon={
                    <Icon
                      name={"arrow-"+direction}
                      size={20}
                      color="rgba(0,0,0,0.5)"
                    />
                  }
            />
        )
    }
}
