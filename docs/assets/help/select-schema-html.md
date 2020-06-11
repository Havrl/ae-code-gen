```html
<div class="form-group">
  <label for="selectExample">
    Select Dropdown
  </label>
  <select
    class="form-control"
    id="selectExample"
    formControlName="selectExample"
    aeValidate
    [validateErrors]="{
      required: 'Item is required'
    }"
  >
    <option [ngValue]="null">
      Select...
    </option>
    <option *ngFor="let i of items" 
      [ngValue]="i">{{ i.name }}
    </option>
  </select>
</div>
```
