import React from 'react';

function RobotMiner(props){
    let cost = 100 * (props.robotMiner + 1);
    let uppgradeType = "robotMiner";
    return(
        <button onClick={() => {props.handleUppgrade(uppgradeType)
                                props.handleUpgradeCosts(cost)}}
                className={props.stone >= cost ? "uppgradeButton" : "uppgradeButton-disabled"}
                disabled={props.stone < cost}
        >
            Add RobotMiner <br/>
            costs: {cost}
        </button>
    );
}

export default RobotMiner;
