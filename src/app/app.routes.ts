import { Routes } from '@angular/router';
import { Inicio } from './feature/inicio/inicio';
import { Nosotros } from './feature/nosotros/nosotros';
import { Productos } from './feature/productos/productos';
import { Colecciones } from './feature/colecciones/colecciones';
import { Testimonios } from './feature/testimonios/testimonios';
import { Blog } from './feature/blog/blog';
import { Contacto } from './feature/contacto/contacto';

export const routes: Routes = [
  {
    path: 'Home',
    component: Inicio
  },
  {
    path: 'Nosotros',
    component: Nosotros
  },
  {
    path: 'Productos',
    component: Productos
  },
  {
    path: 'Colecciones',
    component: Colecciones
  },
  {
    path: "Testimonios",
    component: Testimonios 
  },
  {
    path: "Blog",
    component: Blog 
  },
  {
    path: "Contacto",
    component: Contacto 
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'Home'
  }
];
