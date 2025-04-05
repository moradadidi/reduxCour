import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {updateUser} from './state/users/usersSlice';

export default function EditUser( { selectedUser , setSelectedUser  } ) {
    const dispatch = useDispatch();
  const [Data, setData] = useState({ id : '', name: '', email: '', age: '' });

  useEffect(() => {
    if (selectedUser) {
      setData({ id: selectedUser.id, name: selectedUser.name, email: selectedUser.email, age: selectedUser.age });
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
    toast.success("User updated successfully");
    dispatch(updateUser(    { id: Data.id, name: Data.name, email: Data.email, age: Data.age } ));
    setSelectedUser(null);

  };
  
  const handleClose = () => {
    setSelectedUser(null);
  };
  return (
    <div>
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
            value={Data.name}
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
            value={Data.email}
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
            value={Data.age}
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

        <button
        onClick={handleClose}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Cancel
        </button>
      </form>
    </div>
    </div>
    </div>
  )
}
