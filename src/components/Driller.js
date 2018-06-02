import React from 'react';

function Driller(props){
    let cost = 150 * (props.driller + 1);
    let uppgradeType = "driller";
    return(
        <button onClick={() => {props.handleUppgrade(uppgradeType)
                                props.handleUpgradeCosts(cost)}}
                className={props.stone >= cost ? "uppgradeButton" : "uppgradeButton-disabled"}
                disabled={props.stone < cost}
        >
            Add driller <br/>
            costs: {cost}
        </button>
    );
}

export default Driller;
