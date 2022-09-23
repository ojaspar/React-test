import { createContext, useReducer } from 'react';
import { taskFormReducer } from './TaskReducer';
import React from 'react';
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [state, dispatch] = useReducer(taskFormReducer, []);
	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
