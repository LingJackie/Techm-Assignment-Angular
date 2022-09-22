import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePageComponent {

  constructor(public dialog: MatDialog ) {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '10 px',
      left: '200px'
    };

    const dialogRef = this.dialog.open(ProfilePageDialogComponent, {
      width: '250px',
      position: {top: '20px'}
    });

    // dialogRef.updatePosition({ top: `30px`,
    // right: `40px`});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'profile-page-dialog',
  templateUrl: './profile-page-dialog.component.html',
})
export class ProfilePageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProfilePageDialogComponent>){}
    

  onNoClick(): void {
    this.dialogRef.close();
  }
}
