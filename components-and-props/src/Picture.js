import React, { Component } from 'react'

export default class Picture extends Component {
	render() {
		console.log('picture: ', this.props);
		return (
			<img src={this.props.imageUrl} style={{ width: '200px' }} />
		)
	}
}
