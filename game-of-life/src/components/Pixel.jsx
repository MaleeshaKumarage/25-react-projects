import React from 'react';

class Pixel extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			alive: this.props.alive
		}
	}

	handleClick = () => {
		let { x, y, pixelSize } = this.props;
		this.props.toggleLife({x, y});
	}
	
	componentWillReceiveProps(nextProps) {
		if(nextProps.alive !== this.state.alive) {
			this.setState({
				alive: nextProps.alive
			})
		}
	}

	render() {
		let stateClass = this.state.alive ? "alive" : "dead"
		let { x, y, pixelSize } = this.props;
		return (<div 
			style={{"top": pixelSize*y, "left": pixelSize*x, height: pixelSize, width: pixelSize}}
			className={"pixel pixel-"+stateClass} onClick={this.handleClick}>
		</div>);
	}

}

export default Pixel;