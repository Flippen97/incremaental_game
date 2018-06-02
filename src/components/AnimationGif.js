import React from 'react';
import LoopGifs from './LoopGifs';
function AnimationGif(props){
    return(
        <div className="AnimationGif">
            { props.state.workers !== 0 && <LoopGifs  type={props.state.workers} image="worker" />}
            { props.state.robotMiner !== 0 && <LoopGifs  type={props.state.robotMiner} image="robotMiner" />}
            { props.state.driller !== 0 && <LoopGifs  type={props.state.driller} image="driller" />}
            { props.state.bigMachine !== 0 && <LoopGifs  type={props.state.bigMachine} image="bigMachine" />}
        </div>
    );
}

export default AnimationGif;