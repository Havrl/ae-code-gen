-- Form example --
{
  form: {
    name: "myForm",
    layout: stack,
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
      }
    ]
  }
}
-- Grid example --
{
  grid: {
    itemList: "employees",
    paginator: true,
    columns: [
      {
        field: "firstName",
        title: "First Name",
        width: "20%",
        sort: "firstName"
      },
      {
        field: "lastName",
        title: "Last Name",
        width: "20%",
        sort: "lastName"
      }
    ]
  }
}
