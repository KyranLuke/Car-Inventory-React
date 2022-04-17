import './App.css';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
import DataDisplay from './DataDisplay';
import {useState, useEffect} from "react";

function App() { 
  const [filters , setFilters] = useState({});
  const [data, setData] = useState({items: []});

  useEffect(() =>{
    console.log("use effect");

    return () => {
      console.log("cleanup");
    };
  }, [data, filters]);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE"
    };
    fetch(requestOptions).then(
      (response) => {
        if (response.ok) {
        const idx = items.indexOf(item);
        items.splice(idx,1);
        setData({items: items});
      }
    }
   );
  }

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({items: items});
    console.log(data);
  };

  const filterData = (data) => {
    const filteredData = [];

    if(!filters.make){
      return data;
    }

    for(const item of data){
      if (filters.make !== "" && item.make !== filters.make){
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price){
        continue;
      }
      if (filters.model !== "" && item.model !== filters.model){
        continue;
      }
      if (filters.year !== 0 && item.year > filters.year){
        continue;
      }

    filteredData.push(item);
    }
    return filteredData;
  };

  return (
    <div className="container">
      <div className='row mt-3'>
      <DataDisplay deleteItem={deleteItem}
       items={filterData(data["items"])}/>
      </div>
      <div className='row mt-3'>
      <SearchBar updateSearchParams={updateFilters}/>
      </div>
      <div className='row mt-3'>
      <AddItem AddItem = {addItemToData}/>
      </div> 
    </div>
  );
}

export default App;



