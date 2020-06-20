import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: [
    'home.scss'
  ]
})
export class HomePage {

  users: any;
  fakeUsers: Array<any> = new Array(5);

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    // Simulating network latency
    // with a timeout
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.users = data;
        });
    }, 1500);
  }

}
