import { Component, OnInit } from '@angular/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { HttpService } from '../../../services/http.service';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less']
})
export class PersonalComponent implements OnInit {
  // 初始化表格修改modal
  public isVisibleXg:any = false;
  // 初始化表格添加modal
  public isVisibleTj:any = false;
  // 表格展示初始化
  public  listOfData: any = [];
  public inputName1:any="";
  public inputName2:any="";
  public sDate:any='';
  public startDate:any="";
  public eDate:any='';
  public endDate:any="";
  constructor(public http:HttpService) { }

  ngOnInit() {
    // 调用初始化表格内容方法
   this.getProductList()
  }

  // 创建初始化表格内容方法
  getProductList(){
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: 'zhangsan',
        age: 32,
        address:i
      });
    }
  }
  
  search(){
    var now=new Date(this.sDate);
    var now1=new Date(this.eDate);
    this.startDate=now.getFullYear()+now.getMonth()+1+now.getDate()+now.getHours()+now.getMinutes()+now.getSeconds(); 
    this.endDate=now1.getFullYear()+now1.getMonth()+1+now1.getDate()+now1.getHours()+now1.getMinutes()+now1.getSeconds();
     if(this.startDate=="NaN"){
       alert("开始时间不能为空")
     }else if (this.endDate=="NaN"){
        alert("结束时间不能为空")
     }else if(parseInt(this.startDate)>parseInt(this.endDate)){
        alert("开始时间不能大于结束时间")
     }else{
         this.listOfData=[];
         this.listOfData.push({
         name: 'lisi',
          age: 32,
          address:22
       })
     }
  }
  // 修改modal展示
  showModalXg(el): void {
    this.isVisibleXg = true;
    this.inputName2=el.name 
  }
  // 修改条件确认
  handleXgOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleXg = false;
    alert("事件展示")
  }
  // 修改modal取消
  handleXgCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleXg = false;
  }
  // 添加modal展示
  showModalTj(): void {
    this.isVisibleTj = true;
  }
   // 添加条件确认
  handleTjOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleTj = false;
    alert("事件展示")
  }
   // 添加modal取消
  handleTjCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleTj = false;
  }
  // 人员管理删除人员操作
  del(el){
    var str=confirm("确认要删除吗？");
    if(str==true){
      this.listOfData=[];
      alert("删除成功");
    }else{
      alert("取消删除");
    }
  }
}

