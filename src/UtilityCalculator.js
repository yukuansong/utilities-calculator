
import React, { useState } from "react";
import './styles.css'

import ResultDisplay from "./ResultDisplay";

const UtilityCalculator = () => {
  const [formValues, setFormValues] = useState([{ name: "", days: 0 }])
  const [totalCharge, setTotalCharge] = useState(0);

  const [results, setResults] = useState([]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    const value = e.target.name === 'days' ? Number(e.target.value) : e.target.value;
    newFormValues[i][e.target.name] = value;
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", days: 0 }])
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
      totalDays = totalDays + element.days
    )
    )

    const chargePerDay = totalCharge / totalDays;

    let newResults = [];
    formValues.map((element) => {
      const myCharge = element.days * chargePerDay;
      newResults.push({ name: element.name, charge: myCharge });
      return newResults;

    });
    setResults(newResults);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Total Amount $ : </label>
      <input type="text" name="totalCharge" value={totalCharge} onChange={(event) => setTotalCharge(event.target.value)} />
      {
        formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <label>Name</label>
            <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
            <label>Days</label>
            <input type="text" name="days" value={element.days || ""} onChange={e => handleChange(index, e)} />
            {
              index ?
                <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                : null
            }
          </div>
        ))
      }
      <div className="button-section">
        <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
        <button className="button submit" type="submit">Submit</button>
      </div>

      <ResultDisplay data={results} />
    </form>
  )
}


export default UtilityCalculator;