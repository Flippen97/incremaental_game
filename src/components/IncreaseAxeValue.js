import React from 'react';

function IncreaseAxeValue(props){
    let cost = 10 * props.axeLevel;
    let uppgradeType = "axeLevel";
    return(
        <button onClick={() => {props.handleUppgrade(uppgradeType)
                                props.handleUpgradeCosts(cost)}}
                className={props.stone >= cost ? "uppgradeButton" : "uppgradeButton-disabled"}
                disabled={props.stone < cost}
        >
            Increase Axepower<br/>
            costs: {cost}
        </button>
    );
}

export default IncreaseAxeValue;
