import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    GalleriaModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    DialogModule,
    ToastModule,
    TableModule,
    PaginatorModule
  ],
  exports:[
    ButtonModule,
    GalleriaModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    DialogModule,
    ToastModule,
    TableModule,
    PaginatorModule
  ]
})
export class PrimeNgModule { }
