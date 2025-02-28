// import logo from './logo.svg';
import './App.css';
import { ReactCrud } from 'react-crud-2';
import axios from 'axios';

const formData = [
  {
    name: "id",
    type: "text",
    label: "Id",
    placeholder: "Enter your id",
    value: ""
  },
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "Enter your first name",
    value: ""
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Enter your last name",
    value: ""
  },
  {
    name: "dob",
    type: "date",
    label: "Date Of Birth",
    placeholder: "Enter Date Of Birth",
    value: ""
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: ""
  },
  {
    name: "address",
    type: "textarea",
    label: "Address",
    placeholder: "Enter Address",
    value: ""
  }
];
const storeData = (formData) => {
  console.log("Store Data triggered.");
  axios.post("https://jsonplaceholder.typicode.com/todos", formData)
    .then(response => {
      console.log("Data successfully posted:", response.data);
    })
    .catch(error => {
      console.error("There was an error posting the data:", error);
    });
}
const listData = [{ 'id': 1, firstName: 'Abdur', lastName: 'Rahman', email: 'a.rahman@mail.com', 'address': 'Dhaka, Bangladesh' }];
const fieldsToShow = ['id', 'firstName', 'lastName', 'email', 'address'];

function App() {
  return (
    <div>
      <div className="App">
        <ReactCrud formTitle={"Employee Data"}
          storeData={storeData}
          formEntryData={formData}
          listData={listData}
          fieldsToShow={fieldsToShow} />
      </div>
    </div>
  );
}

export default App;
