import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service'

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  tabProduits:string[]=[];
  constructor(private produit:ProduitService) {
    //console.log("Constructeur");
   }

  ngOnInit(): void {
    this.tabProduits = this.produit.getListProduits();
    //console.log("ngOnInit");
    console.log(this.tabProduits);
  }

}
