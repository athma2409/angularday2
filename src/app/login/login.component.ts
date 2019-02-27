import { Component, OnInit } from '@angular/core';
//import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // console.log("ngoninit-login");
 name:string;
 
 
 //adress:any;
 adress:any={};

 arr:any=[];

 
 //console.log();

  constructor( ) { }

  ngOnInit() {

    console.log("ngoninit-login");
    this.name="Ram";
    this.adress="HSR";
    this.arr=[1,2,3,4,"all"];

    console.log(JSON.stringify( this.arr));

    for( var i=0;i<=this.arr.length;i++)
    {
      console.log(this.arr[i]);
    }

//----------------------------------------------

    for(var i=0;i<=10;i++)
    {
      setTimeout(function()
      {
            for(var j=0;j<=10;j++)
            {
              document.write(j +",");
            }
            document.write("<br>"+"<br>");

      }, i * 2000);

    }

//----------------------------------------------



    for(var num=0;num<=10;num++){

        (function(num){
          setTimeout(function(){

            document.write(num +" <br>");
          }, num*1000);
        })(num);
    }



//---------------------------------------------
var k=0;
(function display(){
  if(k++ ==100) return;

  setTimeout(function(){
    document.write(k +"<br>");
    display();
  },1000)


})();


    
//-----------------------------------------------



    





  }

}
