```html
<div class="form-group">
  <label for="firstName">Text Input</label>
  <input
    type="text"
    class="form-control"
    id="textInput"
    formControlName="textInput"
    aeValidate
    [validateErrors]="{
        required: 'Text Input is required',
        maxLength: '20 chars are allowed'
      }"
  />
</div>
```
