import React from 'react';
import Kenobi from './kenobi.gif'
import Grievous from './grievous.gif'
import './Picture.css'


class Picture extends React.Component {

    state = {
        count : 0,
        color : 'has-text-danger',
        logo : Kenobi
    }



    increment = () => {
        this.setState({
            count : this.state.count +1,
            color : 'has-text-success',
            logo : Grievous

        })

    }

    render() {
        return <div>
            <img src={this.state.logo} onClick={this.increment} alt={"logo"} id={"logo"}/>
            <p className={this.state.color}>Image clicked {this.state.count} times </p>

        </div>
    }

}

export default Picture
