import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { DataGrid } from '@material-ui/data-grid';
import { CFDContiner } from './ContactformDetailsStyle'

const ContactformDetails = () => {

  const state = useContext(GlobalState)
  const [contactforms] = state.contactformsAPI.contactforms

  let rows = [];
  rows = contactforms.map(contactform => {
    return (rows = {
      id: contactform._id,
      First_Name: contactform.firstName,
      Last_Name: contactform.lastName,
      Email: contactform.email,
      Number: contactform.number,
      Course: contactform.course,
      Message: contactform.message,
    });
  });

  return (
    <CFDContiner>
      <div style={{ height: "600px", width: '100%' }}>
        <DataGrid
          columns={[{ field: 'id', width: 200 }, { field: 'First_Name', width: 200 }, { field: 'Last_Name', width: 200 }, { field: 'Email', width: 200 }, { field: 'Number', width: 200 }, { field: 'Course', width: 200 }, { field: 'Message', width: 200 }]}
          rows={rows}
        />
      </div>
    </CFDContiner>
  )
}

export default ContactformDetails
