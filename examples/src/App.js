import logo from './logo.svg';
import './App.css';
import { ReactCrud } from 'react-crud-2';

const formData = [
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
const storeData = () => {
  console.log("Store Data");
}
const listData = [{ 'id': 1, name: 'John', email: 'test@mail.com' }];
const fieldsToShow = ['name', 'email'];
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
