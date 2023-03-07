import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {
  num: number|null=null;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.num = Number(res.get('num'))
      console.log(this.num);
      
    })
  }

}
