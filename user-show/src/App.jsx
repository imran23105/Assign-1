import React from "react";
import User from "./components/User";
import customer from "./data";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="max-w-[700px] mx-auto my-[100px] border rounded-lg bg-gray-200 hover:bg-white">
      <Button></Button>
      <div className='flex justify-between items-center mx-[10px] p-4 my-3'>
        <p className="font-bold">Customer</p>
        <p className="font-bold">Date</p>
        <p className="font-bold">Invoice</p>
      </div>
      {customer.map((customer) => (
        <User key={customer.id} customer={customer} />
      ))}
    </div>
  );
};

export default App;
