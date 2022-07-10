import './App.css';
import FullName from './Components/Profile/FullName'
import Address from './Components/Profile/Address'
import ProfilePhoto from './Components/Profile/ProfilePhoto'

function App() {
  return (
    <div id='glob'>
     <ProfilePhoto/>
    
      <div id='text'>
      <FullName />
      <b>i'm graduated as a mechanical engineer, <br></br> but i aim to begin a new career in web development<br></br> and i found this chance with GOMYCODE, <br></br>i had some experience in programming but i hope <br></br>to gain more through their courses</b>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <Address />
      <h2>Age : 25</h2>
      <br></br>
      <div id='sm'>
      <a href='https://www.linkedin.com/in/khalilrejeb/'> <img src='/linkedin.png' alt='img'/></a>
      <a href='https://github.com/KRJB'> <img src='/github.png' alt='img'/></a>
      </div>
      </div>
      
    </div>

  );
}

export default App;
