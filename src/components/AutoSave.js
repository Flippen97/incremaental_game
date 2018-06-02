function AutoSave(props){
    let user = {
        name: props.state.username, stone: props.state.stone,
        axeLevel: props.state.axeLevel, workers: props.state.workers,
        robotMiner: props.state.robotMiner, driller: props.state.driller,
        bigMachine: props.state.bigMachine
      }
      localStorage.setItem(props.state.username, JSON.stringify(user));
    return null;
}

export default AutoSave;
