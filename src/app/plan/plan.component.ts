import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanService } from '../services/plan.service';
import { datamodel } from './model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent implements OnInit {
 createScheme!: FormGroup;
 constructor(private _fb: FormBuilder, private api:PlanService,private router: Router){

 }
 ngOnInit(): void {
  this.createScheme = this._fb.group({
    // pname: new FormControl(''),
    // tunere: new FormControl(''),
    // roi: new FormControl('')
    pname:'',
    tenure:'',
    roi:'',
  })
   
 }
 save(data:datamodel){
  this.api.createPlan(data).subscribe((res)=>{
    console.log(">>>>>>>>>>>",res);
    this.createScheme.reset();
    this.router.navigate(['/schemgenerate']);
  })


 }
}
