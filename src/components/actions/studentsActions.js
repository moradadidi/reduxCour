export const ADD_STUDENTS = ({ name, age, email }) => ({
    type: "ADD_STUDENTS",
    payload: { name, age, email },
  });
; 

export const REMOVE_STUDENTS = (id) => ({
    type: "REMOVE_STUDENTS",    
    payload: { id },
  });

export const CLEAR_STUDENTS = () => ({
    type: "CLEAR_STUDENTS",
  });

  export default { ADD_STUDENTS, REMOVE_STUDENTS, CLEAR_STUDENTS };