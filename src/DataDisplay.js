function DataDisplay({items, deleteItem}){
    const showItem = (item) => {
           return (
            <tr> 
               <th scope="row">{item.id}</th>
               <th>{item.make}</th>
               <th>{item.price}</th>
               <th>{item.model}</th>
               <th>{item.year}</th>
               <td><button className="btn btn-danger" onClick={() => deleteItem(item)}>Delete</button></td>        
            </tr>
          );
        };
    return(
        <div className="container">
            <div className="row">
                <h2>Cars</h2>
                </div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Make</th>
                            <th scope="col">Price</th>
                            <th scope="col">Model</th>
                            <th scope="col">Year</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map(showItem)}
                    </tbody>
                </table>
            </div>       
        </div>
        );

}

export default DataDisplay