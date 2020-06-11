```html
<form [formGroup]="employeeForm" 
   class="ae-form" novalidate>
  <div class="form-group">
    <label for="firstName">
      First Name
    </label>
    <input
      type="text"
      class="form-control"
      id="firstName"
      formControlName="firstName"
      aeValidate
      [validateErrors]="{
          required: 'First name is required'
        }"
    />
  </div>

  <div class="form-group">
    <label for="lastName">
      Last Name
    </label>
    <input
      type="text"
      class="form-control"
      id="lastName"
      formControlName="lastName"
      aeValidate
      [validateErrors]="{
          required: 'Last name is required'
        }"
    />
  </div>

  <div class="form-group">
    <label for="country">Country</label>
    <select class="form-control" 
     id="country" formControlName="country">
      <option [ngValue]="null">
        Select...
      </option>
      <option *ngFor="let c of countryList" 
        [ngValue]="c.code"
        >{{ c.name }}</option
      >
    </select>
  </div>
</form>
```
