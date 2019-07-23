import React from "react";
import {View,StyleSheet,FlatList,AsyncStorage} from "react-native"
import Header from "./components/Header"
import SubTitle from "./components/SubTitle"
import Input from "./components/Input"
import TodoItem from "./components/Todo.js"

export default class Main extends React.Component {

    state = {
        inputValue : '',
        allItems : [{
            title : "물 3잔 마시기",
            isComplete: false
        },{
            title: "30분 이상 걷기",
            isComplete: false
        }]
    }

    componentWillMount() {
        AsyncStorage.getItem('@todo:state').then((state)=> {
            if( state != null){
                this.setState(JSON.parse(state));
            }
        });

    }

    _makeTodoItem = ({item,index}) => {
        return (
            <TodoItem title={item.title}
                    isComplete={item.isComplete}
                    toggle={() => {
                        const newTodo = [...this.state.allItems];
                        newTodo[index].isComplete = !newTodo[index].isComplete;
                        this.setState({allItems:newTodo},this.saveItem);
                    }}
                    deleteItem={() => {
                        const newTodo = [...this.state.allItems];
                        newTodo.splice(index,1);
                        this.setState({allItems:newTodo},this.saveItem);
                    }}/>
        )
    }

    addNewItem = () => {
        const {inputValue} = this.state;
        if(inputValue !== ''){
            this.setState(prevState => {
                newState = prevState.allItems.concat(
                    {
                        title:inputValue,
                        isComplete:false
                    }
                );
                return {allItems: newState};
            })
        }
        this.setState({inputValue:''},this.saveItem);
    }

    newInputValue = (value) => {
        this.setState({inputValue:value});
    }

    saveItem = () => {
        //state를 문자열로 바꿔서 저장함
        AsyncStorage.setItem('@todo:state',JSON.stringify(this.state));
    }

    render(){
        return (
            <View>
                <View style={styles.centered}>
                    <Header title={'My Todo App'}/>
                </View>
                <View style={styles.inputContainer}>
                    <SubTitle subTitle={'Todo 입력'}/>
                    <Input inputValue={this.state.inputValue}
                        onChangeText={this.newInputValue}
                        onDoneAddItem={this.addNewItem}/>
                </View>

                <View style={styles.listContainer}>
                    <SubTitle subTitle={'Todo List'}/>
                </View>
                
                <View style={styles.todoContainer}>
                    <FlatList
                        data={this.state.allItems}
                        renderItem={this._makeTodoItem}
                        keyExtractor={(_, index) => { return `${index}`}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center'
    },
    inputContainer: {
        marginLeft: 20
    },
    listContainer: {
        marginLeft: 20,
        marginTop:20
    },
    todoContainer: {
        marginLeft: 20
    }
})