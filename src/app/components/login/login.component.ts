import { Component, OnInit } from '@angular/core';
import { StroageService } from '../../services/stroage.service'
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public userinfo:any={
    username:'',
    password:''
  }
  constructor(public storage:StroageService,public router:Router,public http:HttpService) { }

  ngOnInit() {
  }
 

  doLogin(){
    if(this.userinfo.username==''){
      alert('用户名不能为空');
    }else if(this.userinfo.password.length==''){

      alert('密码不能为空');
    }else{
        var api="pub/login";
        this.http.ajaxPost(api,{
          userName:this.userinfo.username,
          userPassword:this.userinfo.password,
        }).then((response:any)=>{
          if(response.code=="0"){
            this.router.navigate(['/mangent/load']);
            this.storage.set('todolist',this.userinfo); 
            this.storage.set('LoginData',response.data); 
          }else{
            alert("用户名或者密码错误")
          }  
        })

    }

  }
}
