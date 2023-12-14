import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  type: string;
  rdata: string;
  ttl:number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'gradnja.si', type: 'A', rdata: 'H',ttl:123},
  { name: 'mail.gradnja.si', type: 'MX', rdata: 'He',ttl:223},
];
@Component({
  selector: 'app-dns-list',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './dns-list.component.html',
  styleUrl: './dns-list.component.css'
})

export class DnsListComponent {
 displayedColumns: string[] = ['name', 'type', 'rdata', 'ttl'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
