import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  routes = [
    {
      name: 'Home',
      path: '/Home'
    },
    {
      name: 'Nosotros',
      path: '/Nosotros'
    },
    {
      name: 'Productos',
      path: '/Productos'
    },
    {
      name: 'Colecciones',
      path: '/Colecciones'
    },
    {
      name: 'Testimonios',
      path: '/Testimonios'
    },
    {
      name: 'Blog',
      path: '/Blog'
    },
    {
      name: 'Contacto',
      path: '/Contacto'
    }
  ];
}
