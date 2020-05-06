// //Concept linkedlist and  nodes as objects
// const n1 = {
//     data:100
// }

// const n2 = {
//     data:200
// }

// console.log(n1);
// n1.next; // optional step to declare
// console.log(n1);

// n1.next = n2;

// console.log(n1.next);
// console.log(n1);
// console.log(n2);



// Concept LinkedList and nodes as class:
class Node{  // of each single node
    constructor(data, next=null){ // null will be overridden by new input in next.
      this.data = data;
      this.next = next; 
    }
}
// const n1 = new Node(100); // To show the Node class is like an object Node{ data: 100, next: null }
// console.log(n1);



class LinkedList{
    constructor(){
        this.head = null;  // this.head is the entire LinkedList of nodes. 
        this.size = 0;     // this.size is key to store the size of this LinkedList
    }

   // Insert node first
   insertFirst(data){
    this.head = new Node(data, this.head);
    this.size++;
   }


   // Insert node last
   insertLast(data){
       let node = new Node(data);
       let current;
   
       if(!this.head){ // or this.head == null
        this.head = node;
    
       } else { 
           current = this.head; // current change will reflect in this.head too because reference data type                              
             
        //    console.log("Pre While loop      ------------------- ");
        //    console.log(current);
        //    console.log(this.head);

           while(current.next){  // or current.next != null             
               current = current.next;
           }

        //   console.log("Before  current.next = node;     ------------------- ");
        //   console.log(current);
        //   console.log(this.head);
        
          current.next = node; 
          // this.head will be updated at the segment that resemble current. 
        
        //   console.log("After    current.next = node;    ------------------- ")
        //   console.log(current);   
        //   console.log(this.head);
        
       }
      this.size++; 
   }



   // Insert at index
   insertAt(data, index) {
    //  If index is out of range
    if (index < 0 || index > this.size) {
      return;
    }

    if(index === 0){
        this.head = new Node(data, this.head);
        return;
    }
    //       OR  
    // if (index === 0) {
    //   this.insertFirst(data);
    //   return;
    // }

    const node = new Node(data);
    let current, previous;
    current = this.head;  // Set current to first
    let count = 0;

    while (count < index) { // To open up a space for inserting the node at desired index
      previous = current; // Node before index    
      current = current.next; // Node after index
      count++;
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }


  // Get data value at index 
  getAt(index){
      let current = this.head;
      let count = 0;
      while(current){
          if(count == index){
              console.log(current.data);
          }
          count++;
          current = current.next;
      }
      return null;
  }


  // Remove at certain index
  removeAt(index){
      if(index<0 || index>this.size){
          return;
      }
      let current = this.head;
      let previous;
      let count = 0;
      if(index == 0){
          this.head = current.next;
      } else{
          while(count<index){
              previous = current;
              current = current.next;
              count++;
          }
          previous.next = current.next;
      }
      this.size--;
  }


  // Clear the entire content of the LinkedList
  clearList(){
      this.head = null;
      this.size = 0;
  }


   // Print Linklist data
   printListData(){    
       let current = this.head;
       while (current){  // or  current != null 
        console.log(current.data);
         current = current.next;
       }
   }

}


const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);

// ll.insertLast(100);
// ll.insertLast(200);
// ll.insertLast(300);

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertLast(500);
ll.insertAt(700,3);

ll.printListData();

// console.log("After using clearList function")
// ll.clearList();
// ll.printListData();


// console.log("After use of removeAT :")
// ll.removeAt(2);
// ll.printListData();

// console.log("getAT function gives")
// ll.getAt(3);

// console.log(ll)
