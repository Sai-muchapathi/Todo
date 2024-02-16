import React, {useState} from 'react';

const Tasks = ({projectDetails}) => {

    const [tasks, setTasks] = useState([]);
    function handleClick() {
        const newTask = document.getElementById("task");
        setTasks((prevTasks) => [
            ...prevTasks,
            { taskTitle: newTask }
        ]);
    }

    return (
        <div className="p-4 border border-gray-300 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-2">
                {projectDetails && projectDetails.projectTitle}
            </h1>
            <h6 className="text-sm text-gray-600 mb-4">
                Due Date: {projectDetails && projectDetails.dueDate}
            </h6>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Delete
            </button>
            <p className="mb-2">{projectDetails && projectDetails.description}</p>
            <hr className="my-4 border-t border-gray-400"/>
            <h2 className="text-xl font-bold mb-2">Tasks</h2>
            <input
                type="text"
                id="task"
                className="w-50 m-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-2"
            />
            <button
                onClick={handleClick}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
            >
                Add Task
            </button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
