import React from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component {
	id = this.props.match.params.id;

	componentDidMount() {
		this.props.fetchStream(this.id);
	};

	onClick = () => {
		this.props.deleteStream(this.id);
	};

	renderActions() {
		return (
			<>
				<button onClick={this.onClick} className="ui negative button">Delete</button>
				<Link to="/" className="ui button">Cancel</Link>
			</>
		);
	}

	renderModal() {
		if (!this.props.stream) {
			return 'Are u sure?';
		};
		return `Lets delete: ${this.props.stream.title} ?`;
	}

	render() {
		return (
			<Modal 
				title="Delete Stream"
				desc={this.renderModal()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		)
	}
};


const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.stream[ownProps.match.params.id]
	};
}


export default connect(mapStateToProps,{
	fetchStream, deleteStream
})(StreamDelete);