import React, { Component } from 'react';
import Uppgrades from './Uppgrades';
import AnimationGif from './AnimationGif';
import AutoSave from './AutoSave';
import Pickaxe from './Pickaxe';

class GameView extends Component {

  state = {
    username: '',
    stone: 0,
    axeLevel: 1,
    workers: 0,
    robotMiner: 0,
    driller: 0,
    bigMachine: 0

  }
  componentDidMount(){
    /** 
     * When Component is "ready", call the function 
     * that will get the list of the data and store it in state
     */
    this.setState({ username: this.props.userProgress.name, stone: this.props.userProgress.stone,
                    axeLevel: this.props.userProgress.axeLevel, workers: this.props.userProgress.workers,
                    robotMiner: this.props.userProgress.robotMiner, driller: this.props.userProgress.driller,
                    bigMachine: this.props.userProgress.bigMachine});
    this.handleInterval();
  }
  handleUpgradeCosts = (cost) => {
      this.setState({stone: this.state.stone - cost})
  }

  handleStoneIncrease =  (increaseValue) => {
    this.setState({stone: this.state.stone + increaseValue});
  }
  handleUppgrade = (uppgradeType) =>{
    if(uppgradeType === "axeLevel"){
        this.setState({axeLevel: this.state.axeLevel + 1});
    }else if(uppgradeType === "workers"){
      this.setState({workers: this.state.workers + 1});
    }else if(uppgradeType === "robotMiner"){
      this.setState({robotMiner: this.state.robotMiner + 1});
    }else if(uppgradeType === "driller"){
      this.setState({driller: this.state.driller + 1});
    }else if(uppgradeType === "bigMachine"){
      this.setState({bigMachine: this.state.bigMachine + 1});
    }
  }
  handleInterval = () => {
    this.workers = setInterval(() => {
        let increaseValue = this.state.workers;
        this.handleStoneIncrease(increaseValue);
    }, 1000);
    this.robotMiner = setInterval(() => {
      let increaseValue = this.state.robotMiner !== 0 ? this.state.robotMiner + 1 : this.state.robotMiner;
      this.handleStoneIncrease(increaseValue);
    }, 3000);
    this.driller = setInterval(() => {
      let increaseValue = this.state.driller !== 0 ? this.state.driller + 2 : this.state.driller;
      this.handleStoneIncrease(increaseValue);
    }, 3000);
    this.bigMachine = setInterval(() => {
      let increaseValue = this.state.bigMachine !== 0 ? this.state.bigMachine + 3: this.state.bigMachine;
      this.handleStoneIncrease(increaseValue);
    }, 3000);
  }

  render() {
    return (
        <main>
          <span className="stoneMined">Total amount of Mined stone: {this.state.stone} </span>
          <div className="wrapper">
            <div>
            <Pickaxe handleStoneIncrease={this.handleStoneIncrease}
                    axeLevel={this.state.axeLevel}/>
            </div>
            <AnimationGif state={this.state}/>

            <Uppgrades handleUppgrade={this.handleUppgrade}
                      handleUpgradeCosts={this.handleUpgradeCosts}
                      state={this.state}/>

            { this.state.username !== '' && <AutoSave   state={this.state}/>}
          </div>
        </main>
    );
  }
}
export default GameView;
