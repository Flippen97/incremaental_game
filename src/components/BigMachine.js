import React from 'react';

function BigMachine(props){
    let cost = 200 * (props.bigMachine + 1);
    let uppgradeType = "bigMachine";
    return(
        <button onClick={() => {props.handleUppgrade(uppgradeType)
                                props.handleUpgradeCosts(cost)}}
                className={props.stone >= cost ? "uppgradeButton" : "uppgradeButton-disabled"}
                disabled={props.stone < cost}
        >
            Add big machine <br/>
            costs: {cost}
        </button>
    );
}

export default BigMachine;
