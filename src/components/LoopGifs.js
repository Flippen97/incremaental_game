import React from 'react';

function LoopGifs(props){
    let images = [];
    for (let i = 0; i < props.type; i++) { 
        if(i<9){
        images.push(<div key={i}><img src={require(`../images/${props.image}.gif`)} alt="" className="img-responsive" /></div>);
        }
    }
    return <div className={props.image}>{images}<div className="centerAlign">Total:<br/>{props.type}</div></div>
}

export default LoopGifs;
