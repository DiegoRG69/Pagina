import { Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { MapsComponent } from './maps/maps.component';
import { ArmasComponent } from './armas/armas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';


export const routes: Routes = [
    
    {path: "mapas", component: MapsComponent},
    {path: "bienvenida", component: BienvenidaComponent},
    {path: "vehiculos", component: VehiculosComponent},
    {path: "armas", component: ArmasComponent},
];

