import { Injectable } from '@angular/core';
import { Produit } from '../Modeles/modeles';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[] =[];/*= [
    { "nom": "PC HP", "prix": 1000 },
    { "nom": "Imprimante", "prix": 400 },
    { "nom": "Smart Phone", "prix": 900 }
  ]*/
  constructor(private http:HttpClient) { }

  getListProduits() {
   // return this.produits;
   return this.http.get("http://127.0.0.1:8080/cimispring/list");
  }
}
