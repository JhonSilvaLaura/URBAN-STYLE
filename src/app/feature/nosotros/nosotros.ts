import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros implements OnInit {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Nosotros | Urban Style');
    this.meta.updateTag({
      name: 'description',
      content: 'Conoce Urban Style: una marca de moda urbana y juvenil que representa autenticidad, estilo y actitud en [tu ciudad].'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'nosotros, Urban Style, moda juvenil, moda urbana, streetwear, quiénes somos'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Nosotros | Urban Style'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Descubre quiénes somos, nuestra historia y el estilo que representamos en Urban Style.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://images.unsplash.com/photo-1520975922071-a5691f742e4f?w=1200'
    });
  }
}
