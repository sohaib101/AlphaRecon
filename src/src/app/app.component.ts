import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  containers : Container[] = [] // containers array to hold
  listVarname = "lst" // each container list ids for drag and drop
  boxCounter = 1      // box counter to identify box number
  listNameCollection = []  // collection of ids used in lists containers


  // class inilizer
  constructor()
  { 
      this.addContainer(3);     // adding 3 containers at start 
  }

  /// adding container public methos
  /// count is the parameter to identify how many containers to be added
  public addContainer(count) : void
  {

    for (let i = 1 ; i <= count ; i++)
      {

    // pushing in array containers    
    this.containers.push(

      {  
        // saving properties of class object
        containerLabel : (this.containers.length + 1).toString(),
        listName : this.listVarname +  (this.containers.length + 1).toString() ,

        // on initialize of each container there will be fix 3 boxes with box number non repeated
        boxes:  [
          (this.boxCounter++).toString(),
          (this.boxCounter++).toString(),
          (this.boxCounter++).toString()
        ]
      
      } 
    )
    
     this.listNameCollection.push(this.listVarname +  (this.containers.length).toString() );
      }
  }
  

  // drag and drop function to move boxes between containers
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}


// container class 
class Container {  

  containerLabel : string;
  listName : string;
  boxes: string[] = [];

} 