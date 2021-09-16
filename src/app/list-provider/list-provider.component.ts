import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {
  name="anis";
  visibilite:boolean=false;
  providers: any;
  chemin:string="https://blog.oxiane.com/wp-content/uploads/2021/02/spring_boog_400x400.png";
  chemin2:string="../assets/Angular.png";
  constructor(private service: ProviderService, private router: Router) { }
  changev()
  {
    this.visibilite = !this.visibilite;
    console.log(this.visibilite)
  }
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
