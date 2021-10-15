import { NgModule, ModuleWithProviders} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {LayoutModule} from '@angular/cdk/layout';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {} from '@angular/cdk/testing';
import {TextFieldModule} from '@angular/cdk/text-field';
import {CdkTreeModule} from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

const material = [
 MatAutocompleteModule,
 MatBadgeModule,
 MatBottomSheetModule,
 MatButtonModule,
 MatButtonToggleModule,
 MatCardModule,
 MatCheckboxModule,
 MatChipsModule,
 MatDialogModule,
 MatDividerModule,
 MatExpansionModule,
 MatFormFieldModule,
 MatGridListModule,
 MatIconModule,
 MatInputModule,
 MatListModule,
 MatMenuModule,
 MatPaginatorModule,
 MatProgressBarModule,
 MatProgressSpinnerModule,
 MatRadioModule,
 MatRippleModule,
 MatSelectModule,
 MatSidenavModule,
 MatSlideToggleModule,
 MatSliderModule,
 MatSnackBarModule,
 MatSortModule,
 MatStepperModule,
 MatTabsModule,
 MatToolbarModule,
 A11yModule,
 BidiModule,
 ClipboardModule,
 DragDropModule,
 LayoutModule,
 ObserversModule,
 OverlayModule,
 PlatformModule,
 PortalModule,
 CdkScrollableModule,
 CdkStepperModule,
 CdkTableModule,
 TextFieldModule,
 CdkTreeModule,
 MatNativeDateModule,
 MatDatepickerModule,
 MatTableModule
]
@NgModule({
  imports: [ 
    material
  ],
  exports: [
    material
  ]
})
export class PWSMaterialModule { 
  constructor(
    public matIconRegistry: MatIconRegistry
  ) {
    // matIconRegistry.registerFontClassAlias ('fontawesome', 'fa')
  }
 /* static forRoot(): ModuleWithProviders {
        return {
            ngModule: PagedMaterialModule,
            providers: [MatIconRegistry]
        };
    }*/
}
