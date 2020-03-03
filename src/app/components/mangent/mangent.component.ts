import { Component, OnInit } from '@angular/core';
import { StroageService } from '../../services/stroage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-mangent',
  templateUrl: './mangent.component.html',
  styleUrls: ['./mangent.component.less']
})
export class MangentComponent implements OnInit {
  public name:any="";
  constructor(public stroage:StroageService,public router:Router) { }

  ngOnInit() {
    var userName=this.stroage.get('todolist').username;
    if(userName==null){
      this.router.navigate(['/login']);
    }else{
      this.name=this.stroage.get('todolist').username;
    }
  }
  showd(){
    alert("参数")
  }

}
