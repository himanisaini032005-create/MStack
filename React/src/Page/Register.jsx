import react from 'react'

const Register = () => {
  return (
    <div>
  <h2>REGISTRATION PAGE</h2>
  <br></br>
  <p>First Name</p>
  <input type='text' placeholder='last name'></input>
<p>Last Name</p>
<input type='text' placeholder='name'></input>
<p>E-mail:</p>
<input type='E-mail' placeholder='Enter E-mail'></input>
<p>password:</p>
<input type='password' placeholder='Enter password'></input>
<p>Contact</p>
<input type='Contact'></input>
<br></br>
<label>Gender:</label>
<select  id='Gender' name='Gender'>
<option>Female</option>
<option>Male</option>
</select>
<br></br>
<a href='Home'>Back To Home</a>
    </div>
    
  )
};

export default Register
