import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TelaCadastroComponent } from './core/pages/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './core/pages/tela-login/tela-login.component';
import { TelaPerfilComponent } from './core/pages/tela-perfil/tela-perfil.component';
import { TelaProjetosComponent } from './core/pages/tela-projetos/tela-projetos.component';
import { TelaTarefasComponent } from './core/pages/tela-tarefas/tela-tarefas.component';
import { TelaHomeComponent } from './core/pages/tela-home/tela-home.component';
import { CarComponent } from './core/pages/components/car/car.component';
import { NavComponent } from './core/pages/components/nav/nav.component';
import { SidebarComponent } from './core/pages/components/sidebar/sidebar.component';
import { ModealEquipesComponent } from './core/pages/components/modeal-equipes/modeal-equipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaCadastroComponent,
    TelaLoginComponent,
    TelaPerfilComponent,
    TelaProjetosComponent,
    TelaTarefasComponent,
    TelaHomeComponent,
    CarComponent,
    NavComponent,
    SidebarComponent,
    ModealEquipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
