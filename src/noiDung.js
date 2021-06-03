import React, { Component } from 'react'

export default class NoiDung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('đây là component will receiprops noidung.js');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('đây là should component update noidung.js' + nextProps.ten);
        return true;
        
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        console.log('đây là component will update noidung.js');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('đây là component did update noidung.js');
    }
    render() {
        return (
            <div>
                <h3>Xin chào {this.props.ten}</h3>
            </div>
        )
    }
}
