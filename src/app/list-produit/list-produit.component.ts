import { Component, OnInit } from '@angular/core';
import { Produit } from '../Modeles/modeles';
import {ProduitService} from '../services/produit.service'

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  tabProduits:any;
  constructor(private produit:ProduitService) {
    //console.log("Constructeur");
   }

  ngOnInit(): void {
   // this.tabProduits = this.produit.getListProduits();
    //console.log("ngOnInit");
    this.produit.getListProduits().subscribe(
      data =>{
        this.tabProduits=data;
        console.log(this.tabProduits);
      }
    );
  }

}
