import React, { Component, NativeModules } from 'react'
import {
    View,
} from 'react-native'
import BasisComponent from '../../BasisComponent'
//import localStyle from '../Styles/styles.json'
import renderBlock from '../Util/renderBlocks'

export default class Card_100 extends BasisComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let item = this.props.item;
        if (item.actions) {
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    style={[appStyles.card, localStyle[item.card_class] ? localStyle[item.card_class].css : {}]}
                    onPress={() => { this.componentEventHandler(item.actions) }}>
                    {renderBlock(item.blocks[0])}
                </TouchableOpacity>
            )
        } else {
            return (
                <View style={[appStyles.card, localStyle[item.card_class] ? localStyle[item.card_class].css : {}]}>
                    {renderBlock(item.blocks[0])}
                </View>
            )
        }
    }

}