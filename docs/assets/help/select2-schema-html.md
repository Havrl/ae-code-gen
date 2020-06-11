```html
<div class="form-group">
  <label for="company">
    Select2 Example
  </label>
  <ae-select2 
    [ajaxOptions]="s2AjaxOptions"
    [itemOptions]="s2ItemOptions"
    [options]="s2Options"
    [customAdapters]="s2CustomeAdapters"
    [data]="s2List"
    formControlName="select2Example" 
    width="100%">
  </ae-select2>
</div>
```
