import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../Services/About.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

  infos: {Name:string, Mail:string, Phone: string };
  comments=[];
  commentaire={date:null, message:""};

 //Principe d'injection de dépendance dans le constructeur
  constructor(private aboutService: AboutService){
    this.infos=this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();
  }

  onAddCommentaire(c){
    this.aboutService.AddComment(c);
    this.commentaire.message="";
    this.comments=this.aboutService.getAllComments();
  }
}
