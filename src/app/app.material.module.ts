import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
//import { MatButtonToggleModule, MatStepperModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatChipsModule,
        MatOptionModule,
        MatGridListModule,
        MatProgressBarModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSelectModule,
        MatInputModule,
        MatSidenavModule,
        MatCardModule,
        MatIconModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatTableModule,
        MatTooltipModule,
        MatExpansionModule,
        // MatDatetimepickerModule,
        // MatNativeDatetimeModule,
        MatBottomSheetModule,
        MatDividerModule,
        MatPaginatorModule,
        MatRippleModule, 
        MatSortModule,
        // MatButtonToggleModule,
        // MatStepperModule,
      
    ],
    exports: [   
        // MatButtonToggleModule,  
        // MatStepperModule,
        MatDividerModule, 
        MatPaginatorModule,
        MatRippleModule,
        MatSortModule, 
        CdkTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatChipsModule,
        MatOptionModule,
        MatGridListModule,
        MatProgressBarModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSelectModule,
        MatInputModule,
        MatSidenavModule,
        MatCardModule,
        MatIconModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatListModule,
        // MatDatepickerModule,
        // MatNativeDateModule,
        MatFormFieldModule,
        MatTableModule,
        MatTooltipModule,
        MatExpansionModule,
        // MatDatetimepickerModule,
        // MatNativeDatetimeModule,
        MatBottomSheetModule

    ],
})
export class AppMaterialModule { }