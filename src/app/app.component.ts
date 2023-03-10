import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiDataService } from './api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  data:any=[];
  showform:boolean=false;
  dataform:FormGroup

  constructor(private APIdata : ApiDataService , public fb:FormBuilder){
    this.dataform=this.fb.group({
      title:[""],
      body:[""]
    })
    this.APIdata.data().subscribe((data=>{
      this.data=data
    })
    )
   }
  ngOnInit(): void {}
  
  addnewdata(){
  this.showform=true
  }
newdata(data:any){
    this.data.push(this.dataform.value) 
    this.showform=false
    this.dataform.reset()

 }
  reset(){
    this.dataform.reset()
  }

  }

