import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  headers = [' CityName', 'CompanyName', 'CourseName', 'CourseDuration'];



  rows:any = [

    {

      CityName: 'Kakinada',

      CompanyName: 'Capgemini',

      CourseName: 'Angular',

      CourseDuration: '100 min',

    },

    {

      cityname: 'Delhi',

      CompanyName: 'Capgemini',

      CourseName: 'react',

      CourseDuration: '100 min',

    },

    {

      CityName: 'pune',

      CompanyName: 'CG',

      CourseName: 'Angular',

      CourseDuration: '4 hrs',

    },

    {

      cityname: 'hyderabad',

      CompanyName: 'Capgemini',

      CourseName: 'Agile',

      CourseDuration:'2 hrs',

    },
  
  ]
  ngOnInit(): void {
      
  }
  AddData(value:any){
console.log(value ) 
this.rows.push(value)


  }
}

  
