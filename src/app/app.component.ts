import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  headers = [' cityname', 'companyname', 'coursename', 'courseduration'];



  rows:any = [

    {

      cityname: 'Kakinada',

      companyname: 'Capgemini',

      coursename: 'Angular',

      courseduration: '100 min',

    },

    {

      cityname: 'Delhi',

      companyname: 'Capgemini',

      coursename: 'react',

      courseduration: '100 min',

    },

    {

      cityname: 'pune',

      companyname: 'CG',

      coursename: 'Angular',

      courseduration: '4 hrs',

    },

    {

      cityname: 'hyderabad',

      companyname: 'Capgemini',

      coursename: 'Agile',

      courseduration:'2 hrs',

    },
  
  ]
  ngOnInit(): void {
      
  }
  AddData(value:any){
console.log(value ) 
this.rows.push(value)


  }
}

  
