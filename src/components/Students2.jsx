import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_STUDENTS, REMOVE_STUDENTS, CLEAR_STUDENTS } from './actions/studentsActions';

export default function Students2() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const students = useSelector((state) => state.students || []);

    console.log(students);
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(ADD_STUDENTS({ name, age, email }));
        // toast.success("Student added successfully");
    }
    return (
        <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
            <form
                className="bg-gray-800 p-6 rounded-lg shadow-md mb-6"
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-bold mb-4">Add a Student</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="bg-gray-700 border border-gray-600 rounded-lg p-2 text-gray-200"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        className="bg-gray-700 border border-gray-600 rounded-lg p-2 text-gray-200"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="bg-gray-700 border border-gray-600 rounded-lg p-2 text-gray-200"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Student
                </button>
            </form>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Students List</h2>
                <table className="w-full border-collapse border border-gray-600">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="border border-gray-600 px-4 py-2">Name</th>
                            <th className="border border-gray-600 px-4 py-2">Age</th>
                            <th className="border border-gray-600 px-4 py-2">Email</th>
                            <th className="border border-gray-600 px-4 py-2">Created At</th>
                            <th className="border border-gray-600 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="hover:bg-gray-700">
                                <td className="border border-gray-600 px-4 py-2">{student.name}</td>
                                <td className="border border-gray-600 px-4 py-2">{student.age}</td>
                                <td className="border border-gray-600 px-4 py-2">{student.email}</td>
                                <td className="border border-gray-600 px-4 py-2">
                                    {student.createdAt.toLocaleString()}
                                </td>
                                <td className="border border-gray-600 px-4 py-2">
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                                        onClick={() => dispatch(REMOVE_STUDENTS(student.id))}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    onClick={() => dispatch(CLEAR_STUDENTS())}
                >
                    Clear Students
                </button>
            </div>
        </div>
    );
}
