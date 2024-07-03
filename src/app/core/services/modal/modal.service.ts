import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private matDialog: MatDialog) { }

  openWithData<T, S>(component: ComponentType<T>, data?: S) {
    const dialogRef = this.matDialog.open(component, {
      data: data,
      autoFocus: false,
      disableClose: true,
      minWidth: '600px',
      width: 'auto',
      panelClass: 'custom-dialog-container',
    });
    return dialogRef.afterClosed();
  }
}
