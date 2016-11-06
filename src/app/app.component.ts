import {Component} from '@angular/core';
import {status, json} from './untils/http';

// Annotation section

@Component({
  selector: 'my-app',
  templateUrl: './app/stories/stories.html'
})

// Component controller
export class MyAppComponent {
  stories: Array<object>;
  imgUrl: string;
  constructor() {
    var _self = this;
    this.imgUrl = './images/dog.png';
    window.fetch('./mock/nytimes_stories.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(status)
    .then(json)
    .then((response) => {
        _self.stories = [];
        response.results.forEach(function(item){
          if(item.multimedia.length > 0){
            item.imageUrl = item.multimedia[3].url;
          }else{
            item.imageUrl = './images/dog.png';
          }
          _self.stories.push(item);
        });
        
        console.log(_self.stories);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
}
