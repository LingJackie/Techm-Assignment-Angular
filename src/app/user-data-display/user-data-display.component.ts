import { Component, OnInit , AfterViewInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDataDisplayComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  ngAfterViewInit() {
    this.userDataSource.sort = this.sort;
  }

  displayedColumns  : string[] = ['id', 'name', 'username', 'email'];// columns of the table
  userData          : {id: number, firstName: string, username: string, email: string}[] = [];// initialize array of objects to hold data from backend
  searchString  = '';

  url             = 'http://localhost:3000/api/get';
  userDataSource  = new MatTableDataSource(this.userData);

  constructor(
    private http: HttpClient, private _liveAnnouncer: LiveAnnouncer
  ) { }


  /** Announce the change in sort state */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
    this.userDataSource.sort = this.sort;// Already called by ngAfterViewInit() but its not working? so calling it here
  }

  /** Searches the columns of userDataSource to see if they contain the string: searchString */
  executeSearch(){
    console.log('Searched for:' + this.searchString );
    this.userDataSource.filter = this.searchString.trim().toLowerCase();
  }

  /** Gets users from db and parses it into an array of objects an then into a MatTable*/
  ngOnInit(): void {
    try {
      this.http.get(this.url).subscribe(data => {
        this.userData=JSON.parse(JSON.stringify(data));
        this.userDataSource = new MatTableDataSource(this.userData);
        console.log(this.userData);
      });
    } catch (error) {
      console.error(error);
    }
  }

}

