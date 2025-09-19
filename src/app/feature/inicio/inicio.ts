import { Component, OnInit } from '@angular/core';

import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Urban Style | Moda Urbana 2025');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubre la mejor moda urbana en Urban Style. Outfits modernos, ropa juvenil y promociones exclusivas.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'ropa juvenil, moda urbana, outfits, streetwear, Urban Style'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Urban Style | Moda Urbana 2025'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Explora la colección 2025 de Urban Style: moda urbana, ropa juvenil y accesorios únicos.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=1200'
    });
  }
}
