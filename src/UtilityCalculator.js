
import React, { useState } from "react";
import './styles.css'

import ResultDisplay from "./ResultDisplay";

const UtilityCalculator = () => {
  const [formValues, setFormValues] = useState([{ name: "", startDate: new Date(), endDate: new Date() }])
  const [totalCharge, setTotalCharge] = useState(0);

  const [results, setResults] = useState([]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    
    // const value = e.target.name === 'name' ? e.target.value: new Date(e.target.value);
    const value = e.target.value;
    newFormValues[i][e.target.name] = value;

    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", startDate: new Date(), endDate: new Date()}])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    // alert(JSON.stringify(formValues));
    let totalDays = 0;

    formValues.map((element) => (
      totalDays = totalDays + (1 + Math.ceil(new Date(element.endDate) - new Date(element.startDate))/(1000*3600*24))
    )
    )

    const chargePerDay = totalCharge / totalDays;

    let newResults = [];
    formValues.map((element) => {
      const myCharge = chargePerDay * (1 + Math.ceil((new Date(element.endDate) - new Date(element.startDate)))/(1000*3600*24));
      newResults.push({ name: element.name, charge: Math.round(myCharge*100)/100 });
      return newResults;

    });
    setResults(newResults);

  }

  return (
    <form onSubmit={handleSubmit}>
      <tr>
      <td><label>Total Amount $ : </label></td>
      <td><input type="text" name="totalCharge" value={totalCharge} onChange={(event) => setTotalCharge(event.target.value)} /> </td>
      <td>for <input type='text'/></td>
      </tr>
      {
        formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <tr>
            <td><label>Name</label></td>
            <td><input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} /></td>
            <td><label>from</label></td>
            <td><input type="date" name="startDate" value={element.startDate || ""} onChange={e => handleChange(index, e)} /> </td>
            <td><lable>through</lable></td>
            <td><input type="date" name="endDate" value={element.endDate || ""} onChange={e => handleChange(index, e)} /> </td>
            {
              index ?
                <td><button type="button" className="button remove" onClick={() => removeFormFields(index)}>&#x2715;</button></td>
                : null
            }
            </tr>
          </div>
        ))
      }
      <div className="button-section">
        <button className="button add" type="button" onClick={() => addFormFields()}>Add more tenant</button>
        <button className="button submit" type="submit">Submit</button>
      </div>

      <ResultDisplay data={results} />
    </form>
  )
}


export default UtilityCalculator;