import { Component } from '@angular/core';
import { number, any } from 'prop-types';
import { LikeComponent } from './like/like.component';

class Post {
  id: number;
  content: string;
  comments?: string[];
}

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'myApp';
  id = 0;


  post: string = '';
  posts: Post[] = [];
  comment: string;


  public oneAtATime: boolean = true;


  constructor () { }


  add_post () {
    console.log( this.post );

    let myLocalPost = {
      id: ++this.id,
      content: this.post,
      comments: []
    }

    this.posts.push( myLocalPost );


  }


  delete_post () {
    console.log( 'post deleted success' );
  }


  add_comment ( i, comment ) {
    this.posts[ i ].comments.push( comment.value );
    this.comment = '';
    console.log( this.posts[ i ] );


  }


  delete_comment ( i, comment ) {

    this.posts[ i ].comments.pop();
    this.comment = '';
    console.log( i );
  }

  numberofLikes: number = 0;

  likeButtonClick() {
    
    this.numberofLikes++;
  }

  disLikeButtonClick () {
    if(this.numberofLikes>0)
    this.numberofLikes--;
  }



}
