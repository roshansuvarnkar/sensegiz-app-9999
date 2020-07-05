import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs'
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

public setTime = new Subject<any>()
public loginCheckStatus = new Subject<any>()


  constructor(
    private router:Router,
    private api:ApiService
  ){
     // var a = setInterval(() => {
     //    this.battleInit();
     //  }, 5000);

  }

battleInit(){
  //console.log("came")
  //this.setTime.next({data:"done"})
}

  LoginStatus(){
  	var status = localStorage.getItem('sensegizLogin')
  	if(status){
  		return true
  	}
  	else{
  		return false
  	}
  }


  userLoginStatus(){
  	var status = localStorage.getItem('sensegizLogin')
    status = JSON.parse(status)
  	if(status){
  		return true
  	}
  	else{
  		return false
  	}
  }

  getLoginData(){
    var status = localStorage.getItem('sensegizLogin')
    if(status){
      return status
    }
    else{
      return false
    }
  }


  getAdminLogin(){
    var status = localStorage.getItem('sensegizLogin')
    if(status){
      return status
    }
    else{
      return false
    }
  }



    getUserLogin(){
      var status = localStorage.getItem('sensegizLogin')
      if(status){
        return status
      }
      else{
        return false
      }
    }



  logout(){
  	localStorage.clear()
    this.router.navigate(['/admin-login'])
  }

}
