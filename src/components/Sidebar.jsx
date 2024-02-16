export default function Sidebar({sideBar, projectDetails, showTasks}) {

    return (
        <>
            <h1 className="my-8 text-center text-5xl font-bold">Your Projects</h1>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                    onClick={sideBar}>+ Add Project
            </button>
            <ol>
                {projectDetails.map((project, index) => (
                    <li key={index}>
                        {project.projectTitle && (
                            <button
                                onClick={() => showTasks(index)}
                                className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-14 m-2 rounded"
                            >
                                {project.projectTitle}
                            </button>
                        )}
                    </li>
                ))}
            </ol>
        </>
    );
}