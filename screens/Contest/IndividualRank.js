import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, Image, } from 'react-native';
import RankList from "../../components/Contest/IndividualRank/rankList";
import { scale, moderateScale, verticalScale } from '../../components/Scaling';


export default class IndiRank extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.individual}>
                    <View style={styles.indiItemWrapper}>
                        <Image
                            style={styles.indiIcon}
                            source={require('../../assets/contest_page/myrank.png')}
                        />
                        <Text style={styles.rank}>
                            Your rank:
                        </Text>
                    </View>
                    <View style={styles.indiItemWrapper}>
                        <Image
                            style={styles.indiIcon}
                            source={require('../../assets/contest_page/mysteps.png')}
                        />
                        <Text style={styles.steps}>
                            Your steps:
                        </Text>
                    </View>
                </View>
                <View style={styles.titleBox}>

                    <Text style={styles.Rank}>Rank</Text>
                    <Text style={styles.ID}>Username</Text>
                    <Text style={styles.Steps}>Steps</Text>

                </View>

                <View style={styles.rankList}>

                    <RankList />

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#EEEEEE',
    },

    individual: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: "stretch",
    },

    indiItemWrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleBox: {
        flex: scale(0.8),
        backgroundColor: '#EBF6F7',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },

    Rank: {
        flex: 1,
        textAlign: 'left',
        fontFamily: 'Gill Sans',
        marginLeft: scale(13)
    },

    ID: {
        flex: 6,
        textAlign: 'left',
        fontFamily: 'Gill Sans',
        marginLeft: scale(30)
    },

    Steps: {
        flex: 1,
        textAlign: 'right',
        fontFamily: 'Gill Sans',
        marginRight: scale(20)
    },

    rankList: {
        flex: 6,
    },

    indiIcon: {
        width: scale(60),
        height: scale(60),
        alignSelf: 'center',
    },

    rank: {
        fontFamily: 'Gill Sans',
        color: 'white',
        fontSize: 15,
        marginTop: 5,
    },

    steps: {
        fontFamily: 'Gill Sans',
        color: 'white',
        fontSize: 15,
        marginTop: 5,
    }

});
