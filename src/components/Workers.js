import React from 'react';

function Workers(props){
    let cost = 50 * (props.workers + 1);
    let uppgradeType = "workers";
    return(
        <button onClick={() => {props.handleUppgrade(uppgradeType)
                                props.handleUpgradeCosts(cost)}}
                className={props.stone >= cost ? "uppgradeButton" : "uppgradeButton-disabled"}
                disabled={props.stone < cost}
        >
            Add worker <br/>
            costs: {cost}
        </button>
    );
}

export default Workers;
