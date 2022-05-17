// import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import { Greeting } from "./components/greetings"
import {Rmo} from "./components/rmo"
import {Navbar} from "./components/navbar"
import styles from "./components/navbar.module.css"

function App() {
  let os = [
    {list:"Android"},
    {list:"Blackberry"},
    {list:"iPhone"},
    {list:"Windows Phone"}
  ]
  let manufacturers = [
    {list:"Samsung"},
    {list:"HTC"},
    {list:"Micromax"},
    {list:"Apple"}
  ]
  let info = [
    {name:"Manish Tiwari", place:"India"},
    {name:"Avanish Tiwari", place:"USA"},
    {name:"Asha Devi", place:"Canada"}
  ]
  return (
    <>
    <div className={styles.navbar}>
      <Navbar />
    </div>
    <h1>Mobile Operating System</h1>
    {os.map((data)=>(
      <div>
        <ul>
          <Rmo {...data}/>
        </ul>
      </div>
      
    ))}
    <h1>Mobile Manufacturers</h1>
    {manufacturers.map((data)=>(
      <div>
        <ul>
          <Rmo {...data}/>
        </ul>
      </div>
      
    ))}
    {/* <div className="App">
      <Hello></Hello>
      <Greeting {...info[0]}/>
      {info.map((user)=>(
        <Greeting {...user}/>
      ))}
    </div> */}
    </>
  );
}

export default App;
