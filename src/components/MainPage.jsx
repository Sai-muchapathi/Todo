import {useState} from "react";

export default function MainPage({projectFormSubmit}) {

    function handleSubmit(event) {
        event.preventDefault();
        let projectTitle = event.target.projectTitle.value;
        let description = event.target.description.value;
        let dueDate = event.target.dueDate.value;

        projectFormSubmit({
            projectTitle: projectTitle,
            description: description,
            dueDate: dueDate
        });
    }

    return (
        <>
            <form className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-md" onSubmit={handleSubmit}>
                <h1 className="text-center font-bold">Enter your project details below</h1>
                <br/>
                <div className="flex justify-between mb-4">
                    <button
                        className="bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded
                        focus:outline-none focus:shadow-outline-blue"
                    >
                        Save
                    </button>
                </div>

                <div className="mb-4">
                    <label htmlFor="projectTitle" className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="projectTitle"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="dueDate" className="block text-gray-700 text-sm font-bold mb-2">
                        DueDate
                    </label>
                    <input
                        type="date"
                        id="dueDate"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
            </form>


        </>
    );
}