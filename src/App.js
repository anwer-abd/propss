import "./App.css";
import Profile from "../src/Profile/Profile.js"

function App() {
  const name = "anwer";
  const lastname = "abdellaoui";
  const bio = "anwer abdellaoui , 27 years old from sidi bouzid,GOMYCODE candidate ";
  const profession = "computer trainer";
  const alertMe=()=> {
    alert(`hello ${name}`)
  }
  return (
  <div className="App">

<Profile name={name} lastname={lastname} bio={bio}  alertMe={alertMe} >
  <img  src ="anwer.jpg" alt="user_photo" /> </Profile>

  </div>);
}

export default App;
