import React from "react";
import {View,TextInput,StyleSheet} from 'react-native';

const Input = ({inputValue,onChangeText,onDoneAddItem}) => (
    <TextInput
        style={styles.input}
        placeholder={"오늘 어떤 일을 하실건가요?"}
        value={inputValue}
        maxLength={30}
        returnKeyType="done"
        onChangeText={onChangeText}
        onSubmitEditing={onDoneAddItem}/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop:15,
        alignSelf:'flex-start'
    }
})

export default Input;