import React, { Component } from 'react';
import "antd/dist/antd.css";
import {Button, Tag} from 'antd';
import {DeleteFilled} from '@ant-design/icons';

class ListItem extends React.Component {
    state = {
        textValue: this.props.textValue,
    }

    render() { 
        return <div>
            <Tag>{this.state.textValue}</Tag>
            <Button 
                shape = 'round' 
                danger = {true} 
                size = 'small' 
                icon = {<DeleteFilled/>}
                onClick = {this.props.onDelete}
                id = {this.state.textValue}
            />
        </div>;
    }
}
 
export default ListItem;