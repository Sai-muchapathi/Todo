import React, {useState} from 'react';

const Tasks = ({projectDetails, deleteProject}) => {

    const [tasks, setTasks] = useState([]);

    function handleClick() {
        const newTask = document.getElementById("task");
        setTasks((prevTasks) => [
            ...prevTasks,
            newTask.value
        ]);
    }

    function handleProjectDelete() {
        deleteProject(projectDetails.id);
    }

    function deleteTasks(index) {
        setTasks((prevData) => {
            return prevData.filter((_, i) => i !== index);
        });
    }

    return (
        <div className="p-4 border border-gray-300 rounded shadow-md">
            <div className="flex flex-box items-center justify-between">
                <h1 className="text-2xl font-bold mb-2">
                    {projectDetails && projectDetails.projectTitle}
                </h1>
                <button
                    onClick={handleProjectDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-6"
                >
                    Delete
                </button>
            </div>
            <h6 className="text-sm text-gray-600 mb-4">
                Due Date: {projectDetails && projectDetails.dueDate}
            </h6>
            <p className="mb-2">{projectDetails && projectDetails.description}</p>
            <hr className="my-4 border-t border-gray-400"/>
            <h2 className="text-xl font-bold mb-2">Tasks</h2>
            <input
                type="text"
                id="task"
                className="w-2/3 m-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-2"
            />
            <button
                onClick={handleClick}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
            >
                Add Task
            </button>
            <br/>
            <hr className="my-4 border-t border-gray-400"/>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="w-2/3">{task}
                        <button
                            onClick={() => deleteTasks(index)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 m-8 px-4 rounded focus:outline-none focus:shadow-outline-gray">
                            Clear
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
