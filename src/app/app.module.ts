import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFireworksModule } from '@fireworks-js/angular';
import { EditComponent } from './edit/edit.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ToDoComponent } from './shared/component/to-do/to-do.component';
import { CdkDrag } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    FullScreenComponent,
    EditComponent,
    ToDoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    NgFireworksModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CdkDrag,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}