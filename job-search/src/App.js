import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/card";
import Select from "react-select";

function App() {
 
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedExperience , setSelectedExperience]  = useState(0);
  const [selectedMinBaseSalary , setSelectedMinBaseSalary] = useState(0);
  const [allJobs, setAllJobs] = useState([]);
  const [jobListAfterFilters, setJobListAfterFilters] = useState(allJobs);
  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ limit: 9, offset: offset }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data || data?.jdList.length === 0) {
        setHasMore(false);
      } else {
       
        setAllJobs((prevItems) => [...prevItems, ...data?.jdList]);
      
        setOffset((prevOffset) => prevOffset + 9);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight ||
      loading ||
      !hasMore
    ) {
      return;
    }
    console.log("Scrolled to bottom ");
    fetchData();
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  const roleOptions = [
    { value: "ios", label: "IOS" },
    { value: "android", label: "Android" },
    { value: "backend", label: "Backend" },
    { value: "frontend", label: "Frontend" },
    { value: "tech lead", label: "Tech Lead" },
  ];
  const locationOptions = [
    { value: "remote", label: "Remote" },
    { value: "delhi ncr", label: "Delhi NCR" },
    { value: "mumbai", label: "Mumbai" },
    { value: "chennai", label: "Chennai" },
    { value: "bangalore", label: "Banglore" },
  ];
  const experienceOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
  ];
  const minSalaryOptions = [
    { value: "0", label: "0K" },
    { value: "10", label: "10K" },
    { value: "20", label: "20K" },
    { value: "30", label: "30K" },
    { value: "40", label: "40K" },
    { value: "40", label: "40K" },
    { value: "50", label: "50K" },
    { value: "60", label: "60K" },
    { value: "70", label: "70K" },
    { value: "80", label: "80K" },
    { value: "90", label: "90K" },
    { value: "100", label: "100K" },
  ];

  useEffect(() => {
    console.log(jobListAfterFilters); 
}, [jobListAfterFilters]);
  function applyFilters() {
    let filteredJobs = [...allJobs];  

    if (selectedRoles.length) {
        filteredJobs = filteredJobs.filter(job =>
            selectedRoles.some(role => role.value === job.jobRole)
        );
    }

    if (selectedLocations.length) {
        filteredJobs = filteredJobs.filter(job =>
            selectedLocations.some(location => location.value === job.location)
        );
    }

    if (selectedExperience) {
        filteredJobs = filteredJobs.filter(job => {
            const expValue = parseInt(selectedExperience.value, 10);
            return (job.minExp !== null ? job.minExp <= expValue : true) &&
                (job.maxExp !== null ? job.maxExp >= expValue : true);
        });
    }

    if (selectedMinBaseSalary) {
        filteredJobs = filteredJobs.filter(job =>
            job.minJdSalary !== null && job.minJdSalary >= parseInt(selectedMinBaseSalary.value, 10)
        );
    }

    setJobListAfterFilters(filteredJobs);  
}
  

  useEffect(() => {
    applyFilters();
  }, [selectedRoles, selectedLocations, selectedExperience, selectedMinBaseSalary, allJobs]);
  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexFlow: "wrap",
          gap: "3rem",
        }}
      >
        <Select
          isMulti
          isClearable
          name="roles"
          placeholder="Roles"
          className="basic-multi-select"
          classNamePrefix="select"
          options={roleOptions}
          onChange={(option)=> setSelectedRoles(option || [])}
        />
        <Select
          isMulti
          isClearable
          name="location"
          placeholder="Location"
          className="basic-multi-select"
          classNamePrefix="select"
          options={locationOptions}
          onChange={(option)=> setSelectedLocations(option || [])}
        />

        <Select
          isClearable
          name="Experience"
          placeholder="Experience"
          className="basic-multi-select"
          classNamePrefix="select"
          options={experienceOptions}
          onChange={(option)=> setSelectedExperience(option || null)}
        />
        <Select
          isClearable
          name="Minimum Base Pay Salary"
          placeholder="Minimum Base Pay Salary"
          className="basic-multi-select"
          classNamePrefix="select"
          options={minSalaryOptions}
          onChange={(option)=> setSelectedMinBaseSalary(option || null)}
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "wrap",
          gap: "6rem",
          justifyContent: "flex-start",
        }}
      >
        {jobListAfterFilters.map((item) => (
          <Card 
          key={item?.jdUid}
          apiJobDetails={item?.jobDetailsFromCompany}
          apijobRole={item?.jobRole}
          apiLocation={item?.location}
          apiMinExp={item?.minExp}
          apiMinJdSalary={item?.minJdSalary}
          apiMaxJdSalary={item?.maxJdSalary}
          apisalaryCurrencyCode={item?.salaryCurrencyCode}
          />
        ))}
      </div>
      {loading && <div>Loading more...</div>}
      {!hasMore && <div>No more data to load</div>}
    </div>
  );
}

export default App;
