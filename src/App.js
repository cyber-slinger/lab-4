import List from './components/List';
import './App.css';


const tasks = [
    { description: 'Learn React', completed: true },
    { description: 'Learn JSX', completed: false },
    { description: 'Build a React App', completed: false }
    ];

function App() {
    return (
        <div className='page'>     
            <List heading='My Task 1' task={tasks}/>
        </div>
    );
}

export default App;
