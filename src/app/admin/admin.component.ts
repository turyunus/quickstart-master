import { Component } from '@angular/core';
import { Http, Response,Headers,RequestOptions,} from '@angular/http';
import 'rxjs/Rx';
import { Providers } from '../../providers/providers';

@Component({
  selector: 'app-admin',
  templateUrl: `./admin.html`,
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent { 

	messages:any;
	products:any;
	userName:string;
	password:string;
	admin:any;
	constructor(private http:Http){
		let body     : any   = '{"entity" : "message", "process" : "select"}',
         type: 'application/json; charset=utf-8',
          headers  : any      = new Headers({ 'Content-Type': type }),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = "http://localhost/blutech/index.php";
        this.http.post(url,body,options)
        .map((res: Response) => res.json())
        .subscribe((res) => {
        	this.messages=res;
              
        });

        body = '{"entity" : "productInService", "process" : "select"}',
         	type = 'application/json; charset=utf-8',
          	headers       = new Headers({ 'Content-Type': type }),
          	options   = new RequestOptions({ headers: headers }),
          	url          = "http://localhost/blutech/index.php";
        this.http.post(url,body,options)
        .map((res: Response) => res.json())
        .subscribe((res) => {
        	this.products=res;
              
        });
       		
	}
	updateProductInService(serialNo:string, status:string, address:string, email:string, phone:number, dateOfReturn:string){
		
		let body = '{"entity" : "productInService", "process" : "update" , "serialNo" : "'+serialNo +'" , "ownerEmail" : "'+email
			+'" , "status" : "'+status+'" , "ownerAddress" : "'+address+'" , "ownerPhone" : "'+phone+'" , "dateOfReturn" : "'+dateOfReturn+'" }',
         	type = 'application/json; charset=utf-8',
          	headers       = new Headers({ 'Content-Type': type }),
          	options   = new RequestOptions({ headers: headers }),
          	url          = "http://localhost/blutech/index.php";
        this.http.post(url,body,options)
        .map((res: Response) => res.json())
        .subscribe((res) => {});

        body = '{"entity" : "productInService", "process" : "select"}',
         	type = 'application/json; charset=utf-8',
          	headers       = new Headers({ 'Content-Type': type }),
          	options   = new RequestOptions({ headers: headers }),
          	url          = "http://localhost/blutech/index.php";
        this.http.post(url,body,options)
        .map((res: Response) => res.json())
        .subscribe((res) => {
        	this.products=res;
              
        });

	}
	login(){
		var body     : any   = '{"entity" : "admin", "process" : "login" , "userName" : "'+this.userName+'" , "password" : "'+this.password+'" }',
         type: 'application/json; charset=utf-8',
          headers  : any      = new Headers({ 'Content-Type': type }),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = "http://localhost/blutech/index.php";
        this.http.post(url,body,options)
        .map((res: Response) => res.json())
        .subscribe((res) => {
        	this.admin=res[0];
        });

	}
}