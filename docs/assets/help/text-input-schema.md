{
  type: text,
  name: "textInput",
  label: "Text Input",
  validation: [
    { 
      validator: required,
      msg: "Text Input is required"
    },
    { 
      validator: maxLength,
      msg: "20 chars are allowed",
      value: "20"
    }
  ]
}
