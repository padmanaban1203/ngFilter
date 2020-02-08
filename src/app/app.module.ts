import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { FilterByThPipe } from './filter-by-th.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterPipePipe,
    FilterByThPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
