import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions'; 
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editStream(this.props.stream.id,formValues);
	}

	renderForm(stream){
		if (!stream) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<h3>Edit Stream</h3>
				<StreamForm 
					initialValues={_.pick(stream, 'title', 'description')}
					onSubmit={this.onSubmit}
				/>
			</div>
		)
	}

	render() {
		return <div>{this.renderForm(this.props.stream)}</div>
	}
};


const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.stream[ownProps.match.params.id]
	};
}

export default connect(mapStateToProps,{ fetchStream,editStream })(StreamEdit);