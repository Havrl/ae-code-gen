### Grid generator

The Angular grid [(primeng)](https://primefaces.org/primeng/#/table) code (html, ts, spec.ts) can be generated using **grid schema** definition.

The grid schema is described using relaxed JSON notation (e.g. quotes are not required around keys as they are simple-keys).

The "grid" object can have the folowing properties:
- name (string, optional): grid name, if emitted will be set to "grid"
- data (string): data list name
- options (object): defines grid options
- colums (object array): list of columns

#### Grid schema example:

    grid: {
      name: "employeeGrid",
      data: "employeeList",
      options: { 
        lazy: true,
        rows: 10
      },
      columns: [
        {
          field: "firstName",
          label: "First Name",
          sortable: "firstName"
        },
        {
          field: "lastName",
          label: "Last Name",
          sortable: "lastName"
        }
      ]
    }