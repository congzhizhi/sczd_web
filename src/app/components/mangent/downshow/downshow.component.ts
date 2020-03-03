import { Component, OnInit,ViewChild} from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpService } from '../../../services/http.service';
@Component({
  selector: 'app-downshow',
  templateUrl: './downshow.component.html',
  styleUrls: ['./downshow.component.less']
})
export class DownshowComponent implements OnInit {
  public tableList:any=[];
  public inputdata = [];
  public dataIndex:any=[];
  constructor(public http:HttpService) { }
  ngOnInit() {
    //初始化调用表格加载方法
    // this.getProductList();
  }
  // getProductList(){
  //   var api="test/list";
  //   this.http.ajaxGet(api).then((response:any)=>{
  //     console.log(response);
  //     if(response.code==0){
  //      this.tableList=response.data;
  //      console.log(response.data)
  //     }else{
  //       alert(response.message);     //toast
  //     } 

  //   })
  // }
  daoru(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
 
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
 
      /* save data */
      this.inputdata = (XLSX.utils.sheet_to_json(ws, {header: 1}));
      console.log(this.inputdata[0])
      this.dataIndex=this.inputdata[0]
      evt.target.value="" // 清空
    };
    reader.readAsBinaryString(target.files[0]);
 
  }
}
