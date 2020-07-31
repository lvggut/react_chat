const initialState = {
	userInfo: {
		initials: 'G',
		name: 'Guest',
		user_login: 'guest',
		props: {
			access: 'external'
		}
	},

	language: localStorage.language,

	page: 'overview',
	notificationsUnread: 0,
};

const rootReducer = (state = initialState, action) => {
	return state;
};

export default rootReducer;