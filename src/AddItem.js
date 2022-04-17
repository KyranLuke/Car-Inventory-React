import {useState} from "react";

function AddItem(props){
    const[make,setMake] = useState("");
    const[price,setPrice] = useState(0);
    const[model,setModel] = useState("");
    const[year,setYear] = useState(0);

    const addItemButtonPressed = () => {
        props.AddItem({make: make, price: price, model: model, year: year});

        setMake("");
        setPrice(0);
        setModel("");
        setYear(0);
    };

    return(
        <div className="container">
            <div className="row">
            <h2>Add a car!</h2>
            </div>
            <div className="row">
                <div className="col">
                <label htmlFor="make-field">Make</label>
                <input id="make-field" type="text" className="form-control" value={make} onChange={(e) => setMake(e.target.value)}></input>
                </div>
                <div className="col">
                <label htmlFor="price-field">Price</label>
                <input id="price-field" type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} ></input>
                </div>
                <div className="col">
                <label htmlFor="model-field">Model</label>
                <input id="model-field" type="text" className="form-control" value={model} onChange={(e) => setModel(e.target.value)}></input>
                </div>
                <div className="col">
                <label htmlFor="year-field">Year</label>
                <input id="year-field" type="number" className="form-control" value={year} onChange={(e) => setYear(e.target.value)}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4"/>
                <button type="button" className="col-4 btn btn-info" onClick={addItemButtonPressed}>Search</button>
            </div>
        </div>
    )
}

export default AddItem;