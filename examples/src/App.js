// import logo from './logo.svg';
import './App.css';
// import { ReactCrud } from 'react-crud-2';
import { ReactCrud } from 'react-crud-2';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import 'react-paginate/theme/basic/react-paginate.css';
import { useState } from 'react';

function App() {
  const formData = [
    {
      isRequired: false,
      name: "id",
      type: "hidden",
      label: "Id",
      placeholder: "Enter your id",
      value: ""
    },
    {
      isRequired: true,
      name: "firstName",
      type: "text",
      label: "First Name",
      placeholder: "Enter your first name",
      value: ""
    },
    {
      isRequired: true,
      name: "lastName",
      type: "text",
      label: "Last Name",
      placeholder: "Enter your last name",
      value: ""
    },
    {
      isRequired: true,
      name: "dob",
      type: "date",
      label: "Date Of Birth",
      placeholder: "Enter Date Of Birth",
      value: ""
    },
    {
      isRequired: true,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      value: ""
    },
    {
      isRequired: true,
      name: "address",
      type: "textarea",
      label: "Address",
      placeholder: "Enter Address",
      value: ""
    }
  ];
  const saveEmployee = (formData) => {
    return new Promise((resolve, reject) => {
      console.log("Store Data triggered.");
      axios.post("https://jsonplaceholder.typicode.com/todos", formData)
        .then(response => {
          console.log("Data successfully posted:", response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.error("There was an error posting the data:", error);
          reject(error);
        });
    });
  }


  const deleteEmployee = (id) => {
    return new Promise((resolve, reject) => {
      console.log("Delete Data triggered.");
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
          console.log("Data successfully deleted:", response.data);
          setListData(prevListData => prevListData.filter(employee => employee.id !== id));
          resolve(response.data);
        })
        .catch(error => {
          console.error("There was an error deleting the data:", error);
          reject(error);
        });
    });
  }

  const fieldsToShow = ['id', 'firstName', 'lastName', 'email', 'address'];
  const [listData, setListData] = useState(Array.from({ length: 30 }, (v, i) => ({
    id: i + 1,
    firstName: `FirstName${i + 1}`,
    lastName: `LastName${i + 1}`,
    dob: `2000-01-${String(i + 1).padStart(2, '0')}`,
    email: `user${i + 1}@mail.com`,
    address: `Address ${i + 1}, City, Country`
  })));

  return (
    <div>
      <h1 className="text-center mt-5">React-Crud-2</h1>
      <div className="App mt-3">
        <ReactCrud formTitle={"Employee Information"}
          identifierField={"id"}
          dataStoreHook={saveEmployee}
          dataRemoveHook={deleteEmployee}
          listData={listData}
          formEntryData={formData}
          fieldsToShow={fieldsToShow} />
      </div>
    </div>
  );
}

export default App;
