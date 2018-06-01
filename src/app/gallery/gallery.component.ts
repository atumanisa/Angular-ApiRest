import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos:any;
//Déclaration d'un attribut "http" de type "Http", qui nous permmettra d'envoyer une requête http
  constructor(private http: Http) { }

  ngOnInit() {

  }
//On passe à notre fonction les données("dataForm") saisies dans le formulaire de notre fichier "gallery.component.ts"
  onSearch(dataForm){

    //Envoie de la requête http vers le serveur
    this.http.get("https://pixabay.com/api/?key=8206019-70ccba57f589d6c56f8ad894a&q="
      +dataForm.motCle+"&per_page=10&page=1")
      .map(resp=>resp.json())
      .subscribe(data=>{
        console.log(data);
        this.pagePhotos=data;
      })
  }

}
