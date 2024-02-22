import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit{

  constructor(
    private route:ActivatedRoute
  ){}

  errorMessage:String = ""
  status:string = ""

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.errorMessage = params['errMsg'] || 'page not found! please try again later';
      this.status = params['statusCode'] || '404';
    })
  }

}
