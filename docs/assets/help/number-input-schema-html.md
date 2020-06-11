```html
<div class="form-group">
  <label for="numberInput">
    Number Input
  </label>
  <input
    type="number"
    class="form-control"
    id="numberInput"
    formControlName="numberInput"
    aeValidate
    [validateErrors]="{
      minLength: 'Min 3 chars required'
    }"
  />
</div>
```
