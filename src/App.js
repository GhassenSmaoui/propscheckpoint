import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/Profile'
import myimage from './image/myPhoto.png'

function App() {
  const data = [
    {
      fullname: "Mohamed Ben Mohamed",
      bio: 'I love teaching',
      profession : 'Teacher'
    },
    
  ];
  const handleClick = (name)=> {alert(`My name is ${name} `)};
  return (
    <div>
      <Profile data={data} handleClick = {handleClick}> 
        {myimage}
      </Profile>
    </div>
  );
}


export default App;
