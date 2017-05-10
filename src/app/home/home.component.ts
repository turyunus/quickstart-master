import { Component } from '@angular/core';
import { Http, Response,Headers,RequestOptions,} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: `./mockup_user.html`
})
export class HomeComponent { 
	senderName:string;
	email:string;
	subject:string;
	content:string;
	serialNo:string;
	product:any;
	constructor(private http:Http){
		
	}

	sendMessage(){
		let body     : any   = '{"entity" : "message", "process" : "insert" , "senderName" : "'+this.senderName +'" , "email" : "'+this.email
			+'" , "subject" : "'+this.subject+'" , "content" : "'+this.content+'" }',
         	type: 'application/json; charset=utf-8',
         	headers  : any      = new Headers({ 'Content-Type': type }),
          	options  : any      = new RequestOptions({ headers: headers }),
          	url      : any      = "http://localhost/blutech/index.php";
        
        this.http.post(url,body,options)
        	.map((res: Response) => res.json())
        	.subscribe((res) => {   } );

	}
	searchProductInService(){
		let body     : any   = '{"entity" : "productInService", "process" : "search" , "serialNo" : "'+this.serialNo+'"}',
         	type: 'application/json; charset=utf-8',
         	headers  : any      = new Headers({ 'Content-Type': type }),
          	options  : any      = new RequestOptions({ headers: headers }),
          	url      : any      = "http://localhost/blutech/index.php";
        
        this.http.post(url,body,options)
        	.map((res: Response) => res.json())
        	.subscribe((res) => {  this.product=res; this.product=this.product[0];} );
	}
}