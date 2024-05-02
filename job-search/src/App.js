
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/card';


function App() {
  const [jobListFromApi , setJobListFromApi] = useState([]);
  const [offset , setOffset] = useState(0);
  const [loading , setLoading] = useState(false);
  const [hasMore , setHasMore] = useState(true);
  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit: 9, offset: offset })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if ( !data || data?.jdList.length === 0) {
        setHasMore(false);
      } else {
        setJobListFromApi(prevItems => [...prevItems, ...data?.jdList]);
        setOffset(prevOffset => prevOffset + 9);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setLoading(false);
  };
  useEffect(()=>{
    fetchData();
  },[])
  const handleScroll = useCallback(() => {
   if (((window.innerHeight + window.scrollY) >= document.body.scrollHeight ) || loading || !hasMore) {
      return;
    }
    console.log("Scrolled to bottom ")
    fetchData();
  }, [loading, hasMore]);

  useEffect(() => {
   
    window.addEventListener('scroll', handleScroll);
    
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  useEffect(()=>{
    console.log(jobListFromApi);
  },[jobListFromApi])

  return (
    <div style={{padding:"2rem"}} >
    <div style={{display: 'flex' , justifyContent:"flex-start", flexFlow:"wrap"}}>
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
    
    <div style={{width : "100%" , display:"flex", flexFlow:"wrap",gap:"6rem" , justifyContent:"flex-start"}}>
      {jobListFromApi.map((item , index) =>(
        <Card key={index} data={item} />
      ))}
    </div>
    {loading && <div>Loading more...</div>}
      {!hasMore && <div>No more data to load</div>}
    </div>
  );
}

export default App;
