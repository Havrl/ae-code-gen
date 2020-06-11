```html
<p-table
  #dt
  [columns]="columns"
  [value]="employees"
  [rows]="rows"
  [scrollable]="true"
  [scrollHeight]="scrollHeight"
  [lazy]="true"
  (onLazyLoad)="onGridLoad($event)"
  [totalRecords]="totalRecords"
  [loading]="loading"
  loadingIcon="fuelux-loader"
>
  <ng-template pTemplate="caption">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4">
        <ae-paginator
          #paginator
          class="float-right ml-1"
          [first]="dt.first"
          [rows]="dt.rows"
          [totalRecords]="dt.totalRecords"
          (pageChange)="onPageChange($event)"
        ></ae-paginator>
      </div>
    </div>
  </ng-template>

  <ng-template pTemplate="colgroup" let-columns>
    <colgroup>
      <col *ngFor="let col of columns" [style.width]="col.width" />
    </colgroup>
  </ng-template>
  <ng-template pTemplate="header" let-columns>
    <tr>
      <th
        *ngFor="let col of columns"
        [pSortableColumn]="col.sort"
        [pSortableColumnDisabled]="!col.sort"
        [ngClass]="!col.sort ? 'ui-sortable-disabled' : null"
      >
        <span [innerHTML]="col.title"></span>
        <p-sortIcon
          [field]="col.sort"
          *ngIf="col.sort"
          class="pull-right"
        ></p-sortIcon>
      </th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-item let-columns="columns">
    <tr>
      <td>
        {{ item.firstName }}
      </td>
      <td>
        {{ item.lastName }}
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr>
      <td colspan="2" class="text-center font-italic">No Data</td>
    </tr>
  </ng-template>
</p-table>
```
