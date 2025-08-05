import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './componets/empleados/empleados.component';
import { FormularioClienteComponent } from './componets/formulario-cliente/formulario-cliente.component';
import { TablaClienteComponent } from './componets/tabla-cliente/tabla-cliente.component';
import { ActualizarClienteComponent } from './componets/actualizar-cliente/actualizar-cliente.component';
import { autheticaGuard } from './guardr/authetica.guard';
import { LoginComponent } from './componets/login/login.component';
import { CerrarLoginComponent } from './componets/cerrar-login/cerrar-login.component';
import { RegistroUsarioFormComponent } from './components/registro-usario-form/registro-usario-form.component';
import { resigtroUsuarioGuard } from './guards/resigtro-usuario.guard';
import { loginCanMatchGuard } from './guards/login-can-match.guard';

export const routes: Routes = [
    { path: "home", component: HomeComponent },

    { path: "empleado", component: EmpleadosComponent, canActivate: [autheticaGuard] },

    { path: "login", component: LoginComponent, canMatch: [loginCanMatchGuard] },

    { path: "Cerrar", component: CerrarLoginComponent },
    { path: "clientes/:id", component: ActualizarClienteComponent },

    { path: "registro", component: FormularioClienteComponent },
    { path: "cliente", component: TablaClienteComponent },



    { path: "formularioRegistro", component: RegistroUsarioFormComponent, canDeactivate: [resigtroUsuarioGuard] },


    { path: "", redirectTo: "home", pathMatch: "full" }
];
