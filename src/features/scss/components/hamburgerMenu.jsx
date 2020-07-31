import React from 'react';
import logoPng from '../assets/img/phoenix_sxx.png';
import classnames from 'classnames';

class MainHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: false };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((state) => ({
			isToggleOn: !state.isToggleOn,
		}));
	}

	render() {
		return (
			<div className="conainer">
				<div className="header_body">
					<a href="" className="header_logo">
						<img src={logoPng} width="45" height="45" alt="logo"></img>
					</a>
					<div
						className={this.state.isToggleOn ? 'header_burger active' : 'header_burger'}
						onClick={this.handleClick}>
						<span></span>
					</div>
					<nav
						className={this.state.isToggleOn ? 'header_menu active' : 'header_menu'}
						onClick={this.handleClick}>
						<ul className="header_list">
							<li>
								<a href="" className="header_link">
									Main
								</a>
							</li>
							<li>
								<a href="" className="header_link">
									Templates
								</a>
							</li>
							<li>
								<a href="" className="header_link">
									About
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default MainHeader;
