import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [studentDetails, setStudentDetails] = useState({
    id: '',
    name: '',
    age: '',
    dob: '',
    contact: '',
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getUserDetails');
        setStudentDetails(response.data.studentDetails);
      } catch (error) {
        console.error('Error fetching student details', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:808101/editUserDetails', studentDetails);
      if (response.data.success) {
        setEditMode(false);
      }
    } catch (error) {
      console.error('Error updating student details', error);
    }
  };

  const handleChange = (e) => {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-50'>
     
      <h2>Student Profile</h2>
      {editMode ? (
        <div>
         
          <label>
            Name:
            <input type="text" name="name" value={studentDetails.name} onChange={handleChange} />
          </label>
          <br />
         
          <label>
            Age:
            <input type="text" name="age" value={studentDetails.age} onChange={handleChange} />
          </label>
          <br />
          
          <label>
            DOB:
            <input type="text" name="dob" value={studentDetails.dob} onChange={handleChange} />
          </label>
          <br />
          
          <label>
            Contact:
            <input type="text" name="contact" value={studentDetails.contact} onChange={handleChange} />
          </label>
          <br />
         
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <div>
          <p>Name: {studentDetails.name}</p>
          </div>
          <div>
          <p>Age: {studentDetails.age}</p>
          </div>
          <div>
          <p>DOB: {studentDetails.dob}</p></div>
          <div>
          <p>Contact: {studentDetails.contact}</p>
          </div>
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Profile;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [values, setValues] = useState({
//     id: '',
//     name: '',
//     email: '',
//   });

//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/getUserDetails');
//         setValues(response.data.values);
//       } catch (error) {
//         console.error('Error fetching student details', error);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.post('http://localhost:8801/editUserDetails');
//       if (response.data.success) {
//         setEditMode(false);
//       }
//     } catch (error) {
//       console.error('Error updating student details', error);
//     }
//   };

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//     <div className='bg-white p-3 rounded w-50'>
     
//       <h2>Student Profile</h2>
//       {editMode ? (
//         <div>
         
//           <label>
//             Name:
//             <input type="text" name="name" value={values.name} onChange={handleChange} />
//           </label>
//           <br />
         
//           <label>
//             Email:
//             <input type="text" name="email" value={values.email} onChange={handleChange} />
//           </label>
//           <br />
          
//           <label>
//             Id:
//             <input type="text" name="id" value={values.id} onChange={handleChange} />
//           </label>
//           <br />
         
//           <button onClick={handleSave}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <div>
//           <p>Name: {values.name}</p>
//           </div>
//           <div>
//           <p>Email: {values.email}</p>
//           </div>
//           <div>
//           <p>Id: {values.id}</p>
//           </div>
          
//           <button onClick={handleEdit}>Edit Profile</button>
//         </div>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Profile;