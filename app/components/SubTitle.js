import React from "react";
import {View,Text,StyleSheet} from "react-native"

const SubTitle = ({subTitle}) => (
    <View style={styles.subTitleContainer}>
        <Text style={styles.subTitleText}>{subTitle}</Text>
    </View>
);

styles = StyleSheet.create({
    subTitleContainer: {
        alignSelf: 'flex-start',
    },
    subTitleText: {
        color: "#45618f",
        fontSize: 18,
        fontWeight: "600"
    }
})

export default SubTitle;