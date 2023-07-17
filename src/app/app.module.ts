import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../app/shared/store/counter.reduce';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.Module';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './component/home/home.component';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContadorComponent } from './component/contador/contador.component';
import { blogReducer } from './shared/store/BLOG/blog.reducer';
import { appState } from './shared/store/GLOBAL/app.state';
import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { EffectsModule } from '@ngrx/effects';
import { FormComponent } from './component/form/form.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { EditUsarioComponent } from './component/edit-usario/edit-usario.component';
import { HttpClientModule } from '@angular/common/http';
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
    EditUsarioComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
