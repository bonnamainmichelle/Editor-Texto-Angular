import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ckeditor-page',
  templateUrl: './ckeditor-page.component.html',
  styleUrls: ['./ckeditor-page.component.css']
})
export class CkeditorPageComponent implements OnInit {


  constructor() { }

  ngOnInit() {}

  ckeditorContent: any;

}
