import React, { Component } from 'react';
import PickaxeSvg from './PickaxeSvg';

class Pickaxe extends Component{

    state = {  
        rotate: false
    }
    animation = () => {
        this.setState({ rotate: true });
        setTimeout(function() { 
            this.setState({rotate: false});
        }.bind(this), 500);
    }
    handleIncrease = () =>{
        const increase = 1 * this.props.axeLevel;
        this.props.handleStoneIncrease(increase)
    }
    render(){
        return(
            <div className={this.state.rotate ? "wiggler axe" : "axe"}
                 onClick={() => {this.animation()
                                 this.handleIncrease()}}>
            
            <PickaxeSvg colorLevel={this.props.axeLevel}/>
            </div>
        )
    }
}
export default Pickaxe;
