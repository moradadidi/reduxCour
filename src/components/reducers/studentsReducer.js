import { produce } from "immer";
import toast from "react-hot-toast";

const initialState = {
  students: [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "I2A2u@example.com",
      createdAt: new Date(),
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      email: "I2A2u@example.com",
      createdAt: new Date(),
    },
  ],
};

const studentReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_STUDENTS": {
        const newStudent = {
          id: draft.students.length + 1,
          name: action.payload.name,
          age: action.payload.age,
          email: action.payload.email,
          createdAt: new Date(),
        };
        draft.students.push(newStudent);
        toast.success("Student added successfully");
        break;
      }
      case "CLEAR_STUDENTS": {
        draft.students = [];
        break;
      }
      case "REMOVE_STUDENTS": {
        draft.students = draft.students.filter(
          (student) => student.id !== action.payload.id
        );
        break;
      }
      default:
        break;
    }
  });
};

export default studentReducer;
