import { Component, NgModule, OnInit } from '@angular/core';
import { PlanService } from '../services/plan.service';
import { NgFor } from '@angular/common';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-schemgenerate',
  standalone: true,
  imports: [NgFor],
  templateUrl: './schemgenerate.component.html',
  styleUrl: './schemgenerate.component.css'
})
export class SchemgenerateComponent implements OnInit {
  previousdata: any = [] ;
  filtered: any;
  odata: any = {};
  pid: any;
  selectedPatient = {};
  // isSelected: boolean | undefined;
  // filterSchem: any =[{}]
  // selectedSchem: any;
  constructor(private api:PlanService){}
  ngOnInit(): void {
  this.getSelectdData();
}

async getSelectdData(){
  await this.api.getPlan().subscribe((res)=>{
    this.previousdata = res;
    console.log(">>>>>>>>>>>>>", this.previousdata);
    
  })
}
onSelectPlan(){
  //  this.filtered = this.previousdata.filter((rec:any) => rec.pname == 'jay');
  // console.log(this.previousdata[0].pname,">>>>>>>>>>>>>>>");
  // this.filtered=this.previousdata.filter( (record:any) => record.pname === "jay");
  console.log(this.filtered);
}
}
