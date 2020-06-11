{
  form: {
    name: "employeeForm",
    controls: [
      {
        type: text,
        name: "firstName",
        label: "First Name",
        validation: [
          {
            validator: required, 
            msg: "First name is required"
          }
        ]
      },
      {
        type: text,
        name: "lastName",
        label: "Last Name",
        validation: [
          {
            validator: required, 
            msg: "Last name is required"
          }
        ]
      },
      {
        type: select,
        name: "country",
        label: "Country",
        select_options: {
          placeholder: "Select...",
          itemList: "countryList",
          itemValue: "code",
          itemText: "name"
        }
      }
    ]
  }
}
