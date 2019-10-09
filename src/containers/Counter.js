import React , {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
    render(){
        return (
            <div>
                <h1>Current value of state is {this.props.ctr}</h1>
                <button className = "btn btn-danger" onClick={this.props.onAddCounter}>Add 5</button>
                <button className = "btn btn-primary" onClick={this.props.onSubCounter}>Sub 5</button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubCounter: () => dispatch({type:'SUB'})
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);