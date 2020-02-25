import { combineReducers } from 'redux'
import todosReducer from 'features/todos/todosSlice'
import visibilityFilterReducer from 'features/filters/FiltersSlice'

export default combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
})
