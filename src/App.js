import { Button, TextField } from '@mui/material';
import './App.css';

//Design an UI to implement the CRUD // CRUD - Create,Read,Update,Delete // Dashboard // List Users - /users // Create User - /create-user 
// Edit User - /edit-user/:id // profile - /profile/:id // edit-profile – /edit-profile/:id

function App() {
  return (
    <div className="App">
      <CreateUser />
    </div>
  );
}

function CreateUser() {
  return (
    <div>
      <h1>Create Account</h1>
      <div className='text-box'>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  )
}

export default App;
