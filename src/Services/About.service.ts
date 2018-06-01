import {Injectable} from '@angular/core';

@Injectable()

export class AboutService{
  Info = {
    Name:"Atumanisa",
    Mail:"atumanisabilaka@gmail.com",
    Phone:"00000000"
  }

  Comments = [
    {date:new Date, message:"A"},
    {date:new Date, message:"B"},
    {date:new Date, message:"C"}
  ];

  commentaire={date:null, message:""};

  AddComment(c) {
    c.date = new Date();
    this.Comments.push(c);

  }

  getAllComments(){
    return this.Comments;
  }

  getInfo(){
    return this.Info;
  }
}
