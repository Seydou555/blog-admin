import { Component, Injectable, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Firestore, FirestoreModule, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FirestoreModule,

  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
@Injectable({
  providedIn:'root'
})
export class CategoriesComponent implements OnInit{
  constructor(private fs:Firestore){}
  ngOnInit(): void {
  }

  onSubmit(formData:any){
    let categoryData={
      category:formData.category
    };
    let col=collection(this.fs,'categories');
    return addDoc(col,categoryData);
    // console.log(categoryData)
  }
}
