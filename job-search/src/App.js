
import './App.css';
import Card from './Components/Card/card';


function App() {
  return (
    <>
    <div style={{display: 'flex' , justifyContent:"flex-start"}}>
    <select
    style={{
      padding : '0.56rem',
      margin : '1rem'
    }}
    >
      <option value="" disabled selected hidden>Roles</option>
      <optgroup label="Engineering">
      <option value="Backend" >Backend</option>
      <option value="Frontend">Frontend</option>
      <option value ="Tech Lead"> Tech Lead</option>
      <option value ="React Native"> React Native</option>
      </optgroup>
    </select>
    <select
    style={{
      padding : '0.56rem',
      margin : '1rem'
    }}
    >
      <option value="" disabled selected hidden> Location </option>
      <optgroup label="Engineering">
      <option value="Backend" >Backend</option>
      <option value="Frontend">Frontend</option>
      <option value ="Tech Lead"> Tech Lead</option>
      <option value ="React Native"> React Native</option>
      </optgroup>
    </select>
    <select
    style={{
      padding : '0.56rem',
      margin : '1rem'
    }}
    >
      <option value="" disabled selected hidden>Tech Stack</option>
      <optgroup label="Engineering">
      <option value="Backend" >Backend</option>
      <option value="Frontend">Frontend</option>
      <option value ="Tech Lead"> Tech Lead</option>
      <option value ="React Native"> React Native</option>
      </optgroup>
    </select>
    <select
    style={{
      padding : '0.56rem',
      margin : '1rem'
    }}
    >
      <option value="" disabled selected hidden>Experience</option>
      <optgroup label="Engineering">
      <option value="Backend" >Backend</option>
      <option value="Frontend">Frontend</option>
      <option value ="Tech Lead"> Tech Lead</option>
      <option value ="React Native"> React Native</option>
      </optgroup>
    </select>
    <select
    style={{
      padding : '0.56rem',
      margin : '1rem'
    }}
    >
      <option value="" disabled selected hidden>Remote</option>
      <optgroup label="Engineering">
      <option value="Backend" >Backend</option>
      <option value="Frontend">Frontend</option>
      <option value ="Tech Lead"> Tech Lead</option>
      <option value ="React Native"> React Native</option>
      </optgroup>
    </select>
    <select
    style={{
      padding : '0.56rem',
      margin : '1rem'
    }}
    >
      <option value="" disabled selected hidden>Minimum Base Pay Salary</option>
      <optgroup label="Engineering">
      <option value="Backend" >Backend</option>
      <option value="Frontend">Frontend</option>
      <option value ="Tech Lead"> Tech Lead</option>
      <option value ="React Native"> React Native</option>
      </optgroup>
    </select>
    <input
    style={{
      padding : '0.56rem',
      margin : '1rem'
    }}
    placeholder  = "Select Company Name"
    />
      
  
    </div>
    <Card />
    </>
  );
}

export default App;
