// imrc
import React, { Component } from 'react';
import "antd/dist/antd.css";
import {Tag, Button, List, Input} from 'antd';
import {PlusSquareFilled, MinusSquareFilled, UserOutlined, CheckCircleTwoTone, PlusSquareOutlined} from '@ant-design/icons';
import ListItem from './listItem';

// cc
class Counter extends React.Component {
    state = {
        counter: 0,
        toDoList:[],
        clicked: false,
        likeCount: 0,
        nameExist: false,
    }

    formatTag(){
        return this.state.counter === 0? <Tag color = "blue">Zero</Tag> : <Tag color = "purple">{this.state.counter}</Tag>;
    }

    // 对counter增加1并把当前的counter放到toDoList中
    handleIncreasement = (e) => {
        // this.state.counter++;
        this.state.toDoList.push({value:e.target.value, id:Date.now()})
        this.setState(this.state);
    }

    // 对counter减1并删除toDoList的最后一个元素
    handleDecreasement = () => {
        this.state.toDoList.pop();
        this.setState(this.state);
    }

    deleteItem = (item) =>{
        this.setState({toDoList: this.state.toDoList.filter(o=>o.id !== item.id) })
    }

    render() { 
        return <div>
            {/* {this.formatTag()} */}
            {/* <Button shape = 'round' icon = {<PlusSquareFilled />} onClick = {this.handleIncreasement}/> */}
            {/* <Button shape = 'round' icon = {<MinusSquareFilled />} onClick = {this.handleDecreasement}/> */}
            
            <Input 
                placeholder = "请输入用户名" 
                onPressEnter = {this.handleIncreasement} 
            />
            <br />
            
            <List
      		    size="small"
      		    bordered // 是否要边框
      		    dataSource={this.state.toDoList}
                // item 是用户输入的内容
                // textValue 是 ListItem 的属性
      		    renderItem={item => <List.Item key = {item.id}><ListItem textValue = {item.value} onDelete = {() =>{
                    this.deleteItem(item)
                }}/></List.Item>}
    		/>

            </div>;
    }
}
 
export default Counter;