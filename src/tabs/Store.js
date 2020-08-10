import React, {useState} from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Slider from '../components/Slider'
import SectionFlatlist from '../components/SectionFlatlist'
import BodyFlatlist from '../components/BodyFlatlist'

export default function Store({navigation}) {
    const [section, setSection] = useState('Food')
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Slider/>
            <SectionFlatlist setSection={setSection}/>
            <BodyFlatlist section={section} navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    scrollView:{}
})