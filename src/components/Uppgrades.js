import React from 'react';
import IncreaseAxeValue from './IncreaseAxeValue';
import Workers from './Workers';
import RobotMiner from './RobotMiner';
import Driller from './Driller';
import BigMachine from './BigMachine';

function Uppgrades(props){
    
    return(
        <div className="uppgrades">
            <IncreaseAxeValue   handleUppgrade={props.handleUppgrade}
                                handleUpgradeCosts={props.handleUpgradeCosts}
                                axeLevel={props.state.axeLevel}
                                stone={props.state.stone}/>

            <Workers    handleUppgrade={props.handleUppgrade}
                        handleUpgradeCosts={props.handleUpgradeCosts}
                        workers={props.state.workers}
                        stone={props.state.stone}/>

            <RobotMiner handleUppgrade={props.handleUppgrade}
                        handleUpgradeCosts={props.handleUpgradeCosts}
                        robotMiner={props.state.robotMiner}
                        stone={props.state.stone}/>
          
            <Driller    handleUppgrade={props.handleUppgrade}
                        handleUpgradeCosts={props.handleUpgradeCosts}
                        driller={props.state.driller}
                        stone={props.state.stone}/>
          
            <BigMachine handleUppgrade={props.handleUppgrade}
                        handleUpgradeCosts={props.handleUpgradeCosts}
                        bigMachine={props.state.bigMachine}
                        stone={props.state.stone}/>
        </div>
    );
}

export default Uppgrades;