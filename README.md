	• npm i redux react-redux


REDUX


	• Action :- What is to be done
		○ Javascript object that have a type field
		○ What to do is told but they don't tell how to do
		Return{type: 'INCREMENT', payload: num}
	• Action creator
		○ Pure function which creates an action
		○ Reusable, predictable and testable
		Export const incNumber =(num) => {return {type: 'INCREMENT', payload: num}}
		
	• Reducer:- how it is to be done
		○ Are functions that take the current state and an action as arguments and return a new state result
		Const initialState=0;

cont changeTheNumber= (state =initialState, action) => {
switch(action.type){
case "INCREMENT": return state +action.payload;
case "DECREMENT": return state-1;
default: return state;
}
}
	• Store:- centralised object which holds state of the application
		○ Has functions like createStore(),dispatch(action), getState()
		○ Redux Store brings together the state, actions, and reducers that make up you app
		○ We have only a single store in a redux application
		○ Every Redux store has a single root reducer function.
		Import {createStore} from "redux";

const store = createStore(rootReducers);
		
		
		
	• Only way to change the state is to dispatch an action
	• Immutability, one way data flow, Predictability of outcome
	• Changes are made with pure Reducer functions

