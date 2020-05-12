### Form generator

The Angular form [(reactive)](https://angular.io/guide/reactive-forms) code (html, ts, spec.ts) can be generated using **form schema** definition.

The form schema is described using relaxed JSON notation (e.g. quotes are not required around keys as they are simple-keys).

The "form" object can have the folowing properties:
- name (string, optional): form name, if emitted will be set to "form"
- type (string): either "default" or "horizontal", related to Bootstrap 4 form layout
- options (object, optional): defines horizontal form spacing  
- submit (string, optional): name of the submit method, if provided then the corresponding submit method is generated
- controls (object array): list of controls the form will contain 

#### Form schema example:

    form: {
      name: "myForm",
      type: "default",
      options: { labelCol: 4, controlCol: 8 }
      controls: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          validation: [
            {
              type: required, 
              msg: "First name is required"
            }
          ]
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          validation: [
            {
              type: required, 
              msg: "Last name is required"
            }
          ]
        }
      ]
    }