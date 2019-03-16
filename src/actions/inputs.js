import { createAction } from 'redux-actions';

const inputChange = createAction('SIMPLE_INPUT_CHANGE');
const integerChange = createAction('INTEGER_INPUT_CHANGE');
const floatChange = createAction('FLOAT_INPUT_CHANGE');
const searchChange = createAction('SEARCH_INPUT_CHANGE');

const clearInput = createAction('CLEAR_INPUT');

export { inputChange, integerChange, floatChange, searchChange, clearInput };
