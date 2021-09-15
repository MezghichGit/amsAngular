import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  providers: any;
  constructor(private service: ProviderService, private router: Router) { }
  ngOnInit() {
    this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }
  deleteProvider(myObj) {
    //console.log(this.provider);
    this.service.deleteProvider(myObj).subscribe(response => {
      console.log(response);
      this.refreshListProviders();
    })
  }
  refreshListProviders() {
    this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }
  updateProvider(myObj) {
    this.router.navigate(['updateProvider' + '/' + myObj['id']]);
  }
}
