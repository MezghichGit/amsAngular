import { Injectable } from '@angular/core';
import { Produit } from '../Modeles/modeles';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[] = [
    { "nom": "PC HP", "prix": 1000 },
    { "nom": "Imprimante", "prix": 400 },
    { "nom": "Smart Phone", "prix": 900 }
  ]
  constructor() { }

  getListProduits() {
    return this.produits;
  }
}
