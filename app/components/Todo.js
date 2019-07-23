import React from "react"
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from "react-native"
import {AntDesign} from "@expo/vector-icons"

const {width,height} = Dimensions.get('window');

const TodoItem= ({title,isComplete,toggle,deleteItem}) => (
    <View style={styles.todoContainer}>
        <View style={({flexDirection:'row'})}>
            <TouchableOpacity
                onPress={toggle}>
                <AntDesign name={isComplete? "checkcircle" : "checkcircleo"} style={isComplete? styles.check : styles.unCheck} size={25}/>
            </TouchableOpacity>
            <Text style={styles.todos}>{title}</Text>
        </View>
        <TouchableOpacity
            onPress={deleteItem}>
            <AntDesign name="close" style={styles.trash} size={20}/>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    todoContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        width : width-40,
        padding: 5,
        marginTop: 20,
        borderBottomWidth:1
        
    },
    check: {
        color: '#0d2042',
        paddingRight:10,
    },
    unCheck: {
        color: '#8e939c',
        paddingRight: 10
    },
    todos: {
        fontSize: 20
    },
    trash: {
        paddingTop: 3
    }
})

export default TodoItem;