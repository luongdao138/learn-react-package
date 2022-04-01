import TaskList from './components/TaskList';
import { useTaskContext } from './context/TaskContext';

const App = () => {
  const { lists } = useTaskContext();

  return (
    <div className='bg-main w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <div className='w-full max-w-2xl mx-auto px-5 grid grid-cols-2 gap-6'>
        {lists.map((list) => (
          <TaskList list={list} key={list.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
