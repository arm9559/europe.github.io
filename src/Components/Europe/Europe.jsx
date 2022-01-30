import React , {useState,useEffect} from 'react';
import axios from 'axios';
import './Europe.scss';
// import ReactBar from "././Components/ReactBar/ReactBar";
import { Routes, Route, Link } from "react-router-dom";
import Population from '../ReactBar/Population';
import Languages from '../ReactBar/Languages';
export default function Europe(){
const [europePopulation,setEuropePopulation] = useState([]);
  const [europeLanguage,setEuropeLanguage] = useState([]);
const [europePoverty,setEuropePoverty] = useState([]);

const [populationFirst,setPopulationFirst] = useState([]);
  const [populationSecond,setPopulationSecond] = useState([]);
const [populationThird,setPopulationThird] = useState([]);
  const [populationFourth,setPopulationFourth] = useState([]);
const [populationFiveth,setPopulationFiveth] = useState([]);

const [populationLanguageFirst,setPopulationLanguageFirst] = useState([])
  const [populationLanguageSecond,setPopulationLanguageSecond] = useState([])
const [populationLanguageThird,setPopulationLanguageThird] = useState([])
  const [populationLanguageFourth,setPopulationLanguageFourth] = useState([])
const [populationLanguageFiveth,setPopulationLanguageFiveth] = useState([])

useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/subregion/europe').then((response)=>{
      setPopulationFirst(response.data[23].population);
        setPopulationSecond(response.data[35].population);
      setPopulationThird(response.data[15].population);
        setPopulationFourth(response.data[20].population);
      setPopulationFiveth(response.data[12].population);

      setPopulationLanguageFirst(response.data[23].languages)
        setPopulationLanguageSecond(response.data[35].languages)
      setPopulationLanguageThird(response.data[15].languages)
        setPopulationLanguageFourth(response.data[20].languages)
      setPopulationLanguageFiveth(response.data[12].languages)

      console.log(response)
    })
},[europePopulation]);

  return(
	<div className='container'>

    <Routes>
      <Route path="/Populations" element={<Population populationFirst={populationFirst} populationSecond={populationSecond} populationThird={populationThird} populationFourth={populationFourth} populationFiveth={populationFiveth}/>}></Route>
      <Route path="/Languages" element={<Languages/>}></Route>
    </Routes>
      <ul>
        <Link to="/Populations"><button className='btn btn-primary'>Europe by Popluation</button></Link>
        <Link to="/Languages"><button className='btn btn-primary'>Top 5 Most Popular Languages</button></Link>
      </ul>
  </div>
    )
}