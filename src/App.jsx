import Sidebar from "./components/Sidebar.jsx";
import MainPage from "./components/MainPage.jsx";
import {useState} from "react";
import Tasks from "./components/Tasks.jsx";

function App() {

    const [sideBarEnabled, setSideBarEnabled] = useState(false);
    const [taskBarEnabled, setTaskBarEnabled] = useState(true);
    let [projectIndex, setProjectIndex] = useState(null);
    const [count, setCount] = useState(1);
    const [project, setProject] = useState([
        {
            id: '',
            projectTitle: '',
            description: '',
            dueDate: ''
        }
        /*{
            id: '0',
            projectTitle: 'Spring Boot',
            description: 'Project 1',
            dueDate: '2/16/2024'
        },
        {
            id: '1',
            projectTitle: 'ReactJS',
            description: 'Project 2',
            dueDate: '2/16/2024'
        },
        {
            id: '2',
            projectTitle: 'NodeJS',
            description: 'Project 3',
            dueDate: '2/16/2024'
        }*/]);

    function handleSidebar() {
        setSideBarEnabled(true);
        setTaskBarEnabled(false);
    }

    function addProject({id, projectTitle, description, dueDate}) {
        setProject((prevData) => [
            ...prevData, {
                id: count,
                projectTitle: projectTitle,
                description: description,
                dueDate: dueDate
            }
        ]);
        setCount((prevCount) => prevCount + 1);
        setSideBarEnabled(false);
    }

    function handleShowTasks(index) {
        setProjectIndex(index);
        setTaskBarEnabled(true);
    }

    function deleteProject(id) {
        setProject((prevData) => {
            const updatedProjects = [...prevData];
            updatedProjects.splice(id, 1);
            return updatedProjects;
        });
        setTaskBarEnabled(false);
        setSideBarEnabled(false);
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/4 bg-gray-200 p-4">
                <Sidebar sideBar={handleSidebar} projectDetails={project} showTasks={handleShowTasks}/>
            </div>
            <div className="w-3/4 p-4 overflow-y-auto">
                {sideBarEnabled && <MainPage projectFormSubmit={addProject}/>}
                {projectIndex !== null && taskBarEnabled && (
                    <Tasks projectDetails={project[projectIndex]} deleteProject={deleteProject}/>)}
            </div>
        </div>
    );
}

export default App;
