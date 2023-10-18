import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import { useEffect, useState } from "react"
import CityList from "./components/CityList"

const Base_Url='http://localhost:9000'

export default function App() {

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
     try{ const res = await fetch(`${Base_Url}/cities`);
      const data = await res.json();
        setCities(data);
      }
     catch {
       alert('there was an error Loading the data');
      }
     finally {
       setIsLoading(false);
      }

    }
    fetchCities();
  },[])
  

  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/login" element={<Login />} />

        <Route path='/app' element={<AppLayout />} >

          <Route index element={<CityList cities={cities} isLoading={isLoading}  />} />
      
        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}  />} />
        <Route path="countries" element={<p>List of Countries</p>} />
        <Route path="form" element={<p>form</p>} />
        
      
      </Route>
        
        <Route path="*" element={<PageNotFound />} />

      </Routes>

    </BrowserRouter>
     
  )

}
