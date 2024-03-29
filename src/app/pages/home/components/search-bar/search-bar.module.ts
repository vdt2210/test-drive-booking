import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, IonicModule, FormsModule, TranslateModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
