import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddnewtaskPage } from '../addnewtask/addnewtask.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   
  todoList = []
   
  list : number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddnewtaskPage
    }) 

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present() 
  }

  delete(index){
    this.todoList.splice(index,1)

  }

}
