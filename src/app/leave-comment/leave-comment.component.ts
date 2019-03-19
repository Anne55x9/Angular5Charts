import { Comment } from './comment';
import { Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-leave-comment',
  templateUrl: './leave-comment.component.html',
  styleUrls: ['./leave-comment.component.css']
})
export class LeaveCommentComponent {
  
  comments: Array<Comment>;

  count = 0;
  showCount = true;
  showThanks = false;
  thankYouNote = "Thank you!";
  

  constructor() {
     
    this.comments = [
      {name: "Ann", text : "I love charts!"},
      {name: "Gert", text : "Chart exploring is living."},
      {name: "Tony", text : "My mind is expanded, thanks!"},
      {name: "Berta", text: "Very interesting, but i hate blue!"}
    ];

    
  }
  addComment(name,text){
    var comment = new Comment(name,text);
    this.comments.push(comment);  
  }

  onCount(){
    this.showCount = true;
    return this.count = this.count + 1;
  }

  showThankYou(){
    this.showThanks = true;
      return this.thankYouNote;
     
  }

  

}
