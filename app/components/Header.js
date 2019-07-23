import React from "react";
import { View,Text,StyleSheet} from "react-native"

const Header = ({title}) => (
    <View style={styles.container}>
        <Text style={styles.headerText}>{title.toUpperCase()}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        margin: 50,
        
    },
    headerText: {
        color: "black",
        fontSize: 25,
        fontWeight: '600'
    }
});

export default Header;