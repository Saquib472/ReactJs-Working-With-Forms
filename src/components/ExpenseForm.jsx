import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});
  const validationRule = {
      title:[
        {
          errorType: 'Required',
          msg: 'Title is required'
        },
        {
          errorType: 'Min Length',
          msg: 'Minimum lenght is 6'
        }
      ],
      category: [
        {
          errorType: 'Required',
          msg: 'Category is required'
        },
      ],
      amount: [
        {
          errorType: 'Required',
          msg: 'Amount is required'
        },
        {
          errorType: 'Only Number',
          msg: 'Only Number is valid'
        },
      ]
  }

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([data, dataValue])=>{
      validationRule[data].some((error)=>{
        if(error.errorType === 'Required' && !dataValue){
          errorsData[data] = error.msg
          return true
        }
        else if(error.errorType === 'Min Length' && dataValue && dataValue.length < 6){
          errorsData[data] = error.msg
          return true
        }
        else if(error.errorType === 'Only Number' && dataValue){
          let regex = /^\d+$/;
          if(!regex.test(dataValue)) errorsData[data] = error.msg
          return true
        }
      })
    })

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onchange={handleChange}
        error={errors.title}
      />
      <Select
        id="category"
        label="Category"
        name="category"
        value={expense.category}
        onchange={handleChange}
        hiddenOption="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onchange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
