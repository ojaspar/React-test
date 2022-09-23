export const taskFormType = {
	ADD_TASK: 'ADD_TASK',
};
export const INITIAL_STATE = {
	task: '',
	startDate: '',
	endDate: '',
	hours: '',
};

export const taskFormReducer = (state, action) => {
	switch (action.type) {
		case taskFormType.ADD_TASK:
			return action.payload;
		default:
			return state;
	}
};
