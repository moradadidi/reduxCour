import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, removeStudent  , clearStudents} from './state/students/studentSlice';

export default function Students() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();
    const students = useSelector((state) => state.students.students);
    // console.table(students);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, age);
        dispatch(addStudent({ name, email, age }));
        setName('');
        setEmail('');
        setAge('');
    };
    
    const handleDelete = (id) => {
        dispatch(removeStudent({ id }));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-white">Add Student</h2>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-300 font-medium mb-2"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="age"
                        className="block text-gray-300 font-medium mb-2"
                    >
                        Age:
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-300 font-medium mb-2"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        handleDelete(student.id);
                                    }}
                                    className={
                                        'bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'
                                    }
                                >
                                    Delete  
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => {
                    dispatch(clearStudents());
                }}
                >
                    Clear Students
                </button>
            </table>
        </div>
    );
}
