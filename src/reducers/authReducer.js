import { SIGN_IN, SIGN_OUT } from '../actions/types'


const INIT = {
	isSignedIn: null,
	userId: null
};


// update INIT ponieważ ta sama nazwa 
// { ...state, isSignedIn: true };
export default (state = INIT, action) => {
	switch (action.type){
		case SIGN_IN:
			return { ...state, isSignedIn: true, userId: action.payload };
		case SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null };
		default: 
			return state;
	};
};