import { Component, OnInit } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ProductCard,CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Productos | Urban Style');
    this.meta.updateTag({
      name: 'description',
      content: 'Explora la colección de Urban Style: camisas oversize, zapatillas street style, casacas denim y accesorios exclusivos.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'ropa urbana, ropa juvenil, moda urbana, Urban Style productos, streetwear'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Productos | Urban Style'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Compra online ropa juvenil y urbana: polos, zapatillas, casacas y accesorios con estilo único.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1200'
    });
  }
  products = [
    {
      title: 'Camisa Oversize Urbana',
      price: 89.9,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800',
    },
    {
      title: 'Zapatillas Street Style',
      price: 199.9,
      image: 'https://images.pexels.com/photos/18155790/pexels-photo-18155790/free-photo-of-moda-disenador-zapatos-estudio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Casaca Denim Classic',
      price: 149.9,
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800',
    },
    {
      title: 'Gorra Snapback Negra',
      price: 59.9,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800',
    },
  ];
}
