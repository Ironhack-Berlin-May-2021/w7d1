import './App.css';
import Profile from './Profile';

function App() {
  const user = {
    name: 'Alice',
    email: 'alice@gmail.com',
    picture: 'https://bit.ly/2zVs57p'
  }
  return (
    <Profile data={user} />
  );
}

export default App;
