import { NgModule, isDevMode } from '@angular/core';

//COMPONENTS
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { HomeComponent } from './component/home/home.component';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContadorComponent } from './component/contador/contador.component';
import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { FormComponent } from './component/form/form.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { DetalhesUsuariosComponent } from './component/detalhes-usuarios/detalhes-usuarios.component';

//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.Module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { DragDropModule } from '@angular/cdk/drag-drop';

//SHARED
import { counterReducer } from '../app/shared/store/counter.reduce';
import { blogReducer } from './shared/store/BLOG/blog.reducer';
import { appState } from './shared/store/GLOBAL/app.state';
import { BlogEffects } from './shared/store/BLOG/blog.effects';


@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcounterComponent,
    HomeComponent,
    ToolBarComponent,
    BlogComponent,
    ContadorComponent,
    AddBlogComponent,
    FormComponent,
    UsuariosComponent,
    DetalhesUsuariosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appState),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BlogEffects]),
    NgToastModule,
    NgConfirmModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
