import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function AddForm({ handleInputs, handleSubmit }) {
  return (
    <div className="form-group">
      <label className="ml-2 mt-4">What?</label>
      <input type="text" name="what" className="form-control ml-2 mr-2" style={{width: '60%'}} onChange={handleInputs} />
      <br></br>
      <label className="ml-2">Where?</label>
      <input type="text" name="where" className="form-control ml-2 mr-2" style={{width: '60%'}} onChange={handleInputs} />
      <br></br>
      <label className="ml-2">Urgent?</label>
      <br></br>
      <select  className="custom-select ml-2 mr-2" name="colour" onChange={handleInputs} style={{width: '60%'}} defaultValue="green">
        <option value="green">Not really</option>
        <option value="yellow">A little bit</option>
        <option value="red">Very much</option>
      </select>
      <br></br>
      <input type="button" className="mt-4 ml-2 btn btn-secondary"  value="Add" onClick={handleSubmit}/>
    </div>  
  )
}

export default AddForm