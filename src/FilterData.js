import filters from "./App";

const filterData = (data) =>{
    const filterData = []
    if(filters.make){
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

    filterData.push(item);
    }
};

export default filterData;
