import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: string[] = ["PC HP", "Imprimante", "Smart Phone"]
  constructor() { }

  getListProduits() {
    return this.produits;
  }
}
