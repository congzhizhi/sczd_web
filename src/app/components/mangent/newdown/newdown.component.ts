import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newdown',
  templateUrl: './newdown.component.html',
  styleUrls: ['./newdown.component.less']
})
export class NewdownComponent implements OnInit {
  public parmas:any=[];
  constructor(public ans:ActivatedRoute) {
    
   }

   ngOnInit() {
    
    //接收值    
    this.ans.queryParams.subscribe((response)=>{
          this.parmas.push(response.aid)
        })
        console.log(this.parmas[0]);
      }
      showIn(item){
        alert(item)
      }
}
