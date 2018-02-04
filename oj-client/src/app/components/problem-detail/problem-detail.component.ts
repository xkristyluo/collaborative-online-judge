import { DataService } from './../../services/data.service';
import { Problem } from './../../models/problem.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem; 

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // console.log(params);
      // console.log(params.get('id')); 
      this.problem = this.dataService.getProblemByID(+params.get('id'));
    });
    
  }

}