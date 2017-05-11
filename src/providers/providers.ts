import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Providers {

  public admin:any={};
  constructor(public http: Http) {
    
  }
  loginAdmin(userName:string, password:string){
    let body     : any   = '{"entity" : "admin", "process" : "select" , "userName" : "'+userName+'" , "password" : "'+password+'" }',
          type: 'application/json; charset=utf-8',
          headers  : any      = new Headers({ 'Content-Type': type }),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = "http://localhost/blutech/index.php";
        
    this.http.post(url,body,options)
        .map((res: Response) => res.json())
        .subscribe((res) => {  this.admin=res; this.admin=this.admin[0];} );
    return 
  }
  setMovie(selectedMovie:any){
  	this.admin=selectedMovie;
  }
  getMovie(){
  	return this.admin;
  }
}
