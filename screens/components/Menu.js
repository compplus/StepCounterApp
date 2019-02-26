import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default class Menu extends Component{
    render(){
        let onItemSelected=this.props.onItemSelected
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <TouchableWithoutFeedback onPress={() => onItemSelected('Setting')}>
                    <View style={styles.avatarContainer}>
                    <Image
                    style={styles.avatar}
                    source={{ uri }}
                    />
                    <Text style={styles.name}>Setting</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text
                onPress={() => onItemSelected('Info')}
                style={styles.item}
                >
                Info
                </Text>
            </ScrollView>
        );
    }
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};