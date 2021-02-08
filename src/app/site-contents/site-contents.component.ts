import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IImage } from '../../interfaces/image'
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-site-contents',
  templateUrl: './site-contents.component.html',
  styleUrls: ['./site-contents.component.css']
})
export class SiteContentsComponent implements OnInit,AfterViewInit  {

  showForm:boolean=false;
  newImgForm;
  imgData:IImage[]=[
    {ImageName: 'Logo', Created: '02/06/2021', ImageLink: 'https://picsum.photos/id/1/200/300'},
    {ImageName: 'Laptop', Created: '02/07/2021', ImageLink: 'https://picsum.photos/id/5/100/50'},
    {ImageName: 'Hacker', Created: '02/09/2021', ImageLink: 'https://picsum.photos/id/4/300/100'},
    {ImageName: 'Nitish', Created: '02/15/2021', ImageLink: 'https://picsum.photos/id/2/400/200'}
  ];

  datasource: MatTableDataSource<IImage>;
  @ViewChild(MatSort) sort: MatSort;
  

  displayedColumns: string[] = ['ImageName','Created','ImageLink','ImageView'];

  constructor(
    private _formBuilder:FormBuilder,
    private _snackBar: MatSnackBar
  ) { 
      this.newImgForm=this._formBuilder.group(
        {
          ImageName:['',Validators.required],
          ImageLink:['',Validators.required]
        }
      );
    }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource(this.imgData);
  }

  ngAfterViewInit() {
    this.datasource.sort = this.sort;
  }

  DisplayForm(){
    this.showForm=true;
  }

  AddImage(formData){
    this.showForm=false;
    formData.Created =formatDate(new Date(), 'MM/dd/yyyy', 'en');
    if(!this.newImgForm.invalid){
      this.imgData.push(formData);
      this.datasource = new MatTableDataSource(this.imgData);
    }
    this._snackBar.open("Image Added Succesfully!",'',{duration:1000,panelClass:['successgreen']});
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

}
