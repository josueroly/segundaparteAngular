import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgclicComponent } from './imgclic/imgclic.component';
import { AulasComponent } from './aulas/aulas.component';
import { CursosComponent } from './cursos/cursos.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    ImgclicComponent,
    AulasComponent,
    CursosComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
