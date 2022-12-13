import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import {Drawer} from 'antd';

class DrawerButton extends Component {
	constructor(props) {
		super(props);
		this._isMounted = false;
	}

	state = {
		visible: false,
	};

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	showDrawer = () => {
		this.setState({visible: true});
	};

	hideDrawer = () => {
		this._isMounted && this.setState({visible: false});
	};

	render() {
		const {visible} = this.state;
		const {
			children,
			link,
			component,
			props,
			drawer = {},
			...buttonProps
		} = this.props;
		const Component = component;
		return (
			<>
				{link &&
				<a
					{...buttonProps}
					onClick={this.showDrawer}
				>
					{children}
				</a>}
				{!link &&
				<Button
					{...buttonProps}
					onClick={this.showDrawer}
				>
					{children}
				</Button>}
				<Drawer
					destroyOnClose
					width={600}
					onClose={this.hideDrawer}
					visible={visible}
					{...drawer}
				>
					<Component
						{...props}
						onClose={this.hideDrawer}
					/>
				</Drawer>
			</>
		);
	}
}

DrawerButton.propTypes = {
	component: PropTypes.any.isRequired,
	props: PropTypes.object,
	drawer: PropTypes.object,
	children: PropTypes.any,
	link: PropTypes.bool,
};

export default DrawerButton;