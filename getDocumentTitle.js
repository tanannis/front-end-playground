const fetchData = async () => {
  const { data } = await axios.get('https://jsonbin.org/shravnk/store', {
    headers: {
      Authorization: 'token 5072eef7-3198-4297-8c91-7138388a3dca'
    }
  })
  // console.log({ data })
  return data
}


/*
  Question 1
  
  - Write a function that:
    1. Accepts a search term (string).
    2. Loads data via `fetchData`.
    3. Returns an array of `report` titles which match the search term.

  - The search term should be compared to `report` titles only: `document` and `page` entities may be ignored.
  - The returned array of `report` titles should be unique by `report` id. 
  
  --------------
  
  - Example input: 'fin'
  - Expected output: ['Financial Report Q4 2021', 'Financial Report Q4 2021'] 
*/

const searchReportTitles = async searchTerm => {
  try {
    const dataObj = await fetchData();
    const result = [];
    // console.log('report', dataObj.report)
    for (const report of Object.values(dataObj.report)) {
      // console.log("report", report)
      if (report.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        result.push(report.title)
      }  
    }  
    // console.log("REsult", result)
    return result;
  } catch (e){
    console.log("Error fetching data", e)
  }  
}

/*
Question 2

- Building on your response from Question 1 another search function which looks for matches in report titles and document names.
- The function should continue to return a unique list of report titles.

  - Example input: 'em'
  - Expected output: ['Financial Report Q1 2022', '2021 Employee Survey', '2020 Employee Survey']
*/

// match document name from document objects first
// if it belongs to that document name, get the title from report objects
const searchReports = async searchTerm => {
  try {
    const resultTitles = new Set();
    const dataObj = await fetchData();
    for (const doc of Object.values(dataObj.document)) {
      // console.log("report", report)
      if (doc.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        const reportId = doc.report_id;
        const report = dataObj.report[reportId];
        resultTitles.add(report.title);
      }  
    }  
    // console.log("REult", resultTitles)
    return resultTitles;
  } catch (e) {
    console.log("Error getting titles from document", e);
  }    
}


/*
  React Components
*/

/*
const TextInput = ({ handleInputChange }) => {
  return (
    <div>
      <input
        type="text"
        onChange={e => handleInputChange(e.target.value)}
      />
    </div>
  )
}
*/

const App = () => {
  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    const fetchResults = async () => {
      const response = await searchReports('em') || []
      setResults(response)
    }
    fetchResults()
  }, [])

  return (
    <div className="App">
      <h1>Reports</h1>
      <div>{results.join(' | ')}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
