// import { createContext, useReducer } from 'react';

// const initialState = { counter: 0 };

//  export const MyContext = createContext();

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return { ...state, counter: state.counter + 1 }
//         case "DECREMENT":
//             return { ...state, counter: state.counter - 1 }
//         case "RESET":
//             return { ...state, counter: 0 }
//         default:
//             return state
//     }
// }

// const GlobalContext = ({ children }) => {

//     const [state, dispatch] = useReducer(reducer, initialState)

//     return (
//         <MyContext.Provider value={{ state, dispatch }}>
//             {children}
//         </MyContext.Provider>
//     )
// }

// export default GlobalContext