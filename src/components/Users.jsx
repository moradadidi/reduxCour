import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser , removeUser } from "./state/users/usersSlice";
import toast from "react-hot-toast";
import EditUser from "./EditUser";

export default function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [Data, setData] = useState({ name: "", age: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
    toast.success("User added successfully");
    dispatch(addUser(Data));
    setOpen(false);
  };
  const handleDelete = (id) => {
    toast.error("User deleted successfully");
    dispatch(removeUser({ id }));
  };

  if (open) {
    return (
      <div className="fixed z-10 inset-0 my-40 ">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <form className="max-w-md mx-auto" onSubmit={ handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setData({ ...Data, name: e.target.value })}
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setData({ ...Data, email: e.target.value })}
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="age"
            id="age"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setData({ ...Data, age: e.target.value })}
            placeholder=" "
            required
          />
          <label
            htmlFor="age"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Age
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
    </div>

    );
  }

  const handleEdit = (user) => {
    setSelectedUser(user);
  };


  if(selectedUser) return <EditUser selectedUser={selectedUser}  setSelectedUser={setSelectedUser}/>
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="flex justify-end mb-4"><button onClick={() => setOpen(true)} className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add User</button></div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              createdAt
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.id}
              </th>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.age}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                {new Date(user.createdAt).toLocaleString()}
              </td>
              <td className="px-6 py-4">
                <button 
                onClick={() => handleDelete(user.id)}
                className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  remove User
                </button>
                <button 
                onClick={() => handleEdit(user)}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2">
                  Edit User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
