{
  type: select,
  name: "selectExample",
  label: "Select Dropdown",
  select_options: {
    placeholder: "Select...",
    itemList: "items",
    itemValue: "id",
    itemText: "name",
    isValueObject: true
  },
  validation: [
    { 
      validator: required,
      msg: "Item is required"
    }
  ]
}
