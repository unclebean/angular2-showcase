import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {status, json} from './http';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  directives: [NgFor],
  templateUrl: './app/stories/stories.html'
})
// Component controller
class MyAppComponent {
  stories: Array<object>;
  constructor() {
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
        this.stories = response.results;

        console.log(this.stories);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
}
bootstrap(MyAppComponent);

