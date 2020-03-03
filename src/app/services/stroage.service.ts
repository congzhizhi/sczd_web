import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StroageService {

  constructor() { }
  // 保存localStroage缓存数据方法
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  // 读取localstroage数据
  get(key:string){
    // return 'this is a service';
    return JSON.parse(localStorage.getItem(key))

  }
  // 移除localStroage数据方法
  remove(key:string){
    localStorage.removeItem(key);
  }
}
