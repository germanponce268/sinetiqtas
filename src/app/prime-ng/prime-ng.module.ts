import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    GalleriaModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  exports:[
    ButtonModule,
    GalleriaModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
