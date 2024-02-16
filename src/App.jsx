import Sidebar from "./components/Sidebar.jsx";
import MainPage from "./components/MainPage.jsx";
import {useState} from "react";
import Tasks from "./components/Tasks.jsx";

function App() {

    const [sideBarEnabled, setSideBarEnabled] = useState(false);
    const [taskBarEnabled, setTaskBarEnabled] = useState(true);
    let [projectIndex, setProjectIndex] = useState(null);
    const [project, setProject] = useState([{
        projectTitle: '',
        description: '',
        dueDate: ''
    }]);

    function handleSidebar() {
        setSideBarEnabled(true);
        setTaskBarEnabled(false);
    }

    function addProject({projectTitle, description, dueDate}) {
        setProject((prevData) => [
            ...prevData, {
                projectTitle: projectTitle,
                description: description,
                dueDate: dueDate
            }
        ]);
        setSideBarEnabled(false);
    }

    function handleShowTasks(index) {
        setProjectIndex(index);
        setTaskBarEnabled(true);
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/4 bg-gray-200 p-4">
                <Sidebar sideBar={handleSidebar} projectDetails={project} showTasks={handleShowTasks}/>
            </div>
            <div className="w-3/4 p-4 overflow-y-auto">
                {sideBarEnabled && <MainPage projectFormSubmit={addProject}/>}
                {projectIndex !== null && taskBarEnabled && (
                    <Tasks projectDetails={project[projectIndex]}/>)}
            </div>
        </div>
    );
}

export default App;
