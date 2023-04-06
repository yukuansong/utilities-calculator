
const ResultDisplay = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Charge</th>
        </tr>
      </thead>
      {
        props.data.map((element, index) => (
          
            <tbody className="results-inline" key={index}>
              <tr>
                <td>{element.name}</td>
                <td>$ {element.charge}</td>
              </tr>
            </tbody>
        ))
      }
    </table>
  )
}

export default ResultDisplay;