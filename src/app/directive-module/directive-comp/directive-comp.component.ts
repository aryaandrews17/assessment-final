import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directive-comp',
  templateUrl: './directive-comp.component.html',
  styleUrls: ['./directive-comp.component.scss']
})
export class DirectiveCompComponent implements OnInit {
rowColor: any;
headerData:any;
enableEdit: boolean | undefined;
enableEditIndex: any;
i: any;
columnlabel: any;


  constructor() { }

  ngOnInit(): void {
  }

   tableHeaders: any= ["id","name","username","email"]; 
user:any;
  rows : any[]= [{
     "id": 1,
    "name": "Ross",
    "username": "Ross123",
    "email": "Ross@gmail.com",
    // "isEditField" : ''
   
  },
  {
     "id": 2,
    "name": "Rachel",
    "username": "Rachel123",
    "email": "Rachel@gmail.com",
    // "isEditField" : ''
    
  },
  {
    "id": 3,
    "name": "Monica",
    "username": "Monica123",
    "email": "Monica@gmail.com",
    // "isEditField" : ''
   
  },
  {
     "id": 4,
    "name": "Chandler",
    "username": "Chandler123",
    "email": "Chandler@gmail.com",
    // "isEditField" : ''
    
  },
  {
     "id": 5,
    "name": "Pheobe",
    "username": "Pheobe123",
    "email": "Pheobe@gmail.com",
    // "isEditField" : ''
    
  },
  {
     "id": 6,
    "name": "Joey",
    "username": "Joey123",
    "email": "Joey@gmail.com",
    // "isEditField" : ''
    
  },
  {
    "id": 7,
    "name": "Jennifer",
    "username": "Jennifer123",
    "email": "Jennifer@gmail.com",
    // "isEditField" : ''
   
  },
  {
    "id": 8,
    "name": "Courtney",
    "username": "Courtney123",
    "email": "Courtney@gmail.com",
    // "isEditField" : ''
    
  },
  {
    "id": 9,
    "name": "Mathew",
    "username": "Mathew123",
    "email": "Mathew@gmail.com",
    // "isEditField" : ''
   
  },
  {
    "id": 10,
    "name": "David",
    "username": "David123",
    "email": "David@gmail.com",
    // "isEditField" : ''
    
  }
  
]


onEdit(item:any, field:string){
 
   this.rows.forEach(element =>{
    element.isEditField = false;
  }) 
  item.isEditField = field;
}

save(item:any){
  item.isEditField = '';
}

}
