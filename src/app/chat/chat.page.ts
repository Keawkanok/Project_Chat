import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  providers: [NavParams],
})
export class ChatPage implements OnInit {
  username: string = '';
  message: string = '';
  mess: string = '';
  myInput;
  _ChatSubscription;
  messages: Object[] = [];
  s;
  constructor(
    public navCtrl: NavController,
    public NavParams: NavParams,
    public Activated: ActivatedRoute,
    public db: AngularFireDatabase
  ) {
      console.log(this.mess, 'myInput');

    this.username = this.NavParams.get('username');
    this._ChatSubscription = this.db
      .list('/chat')
      .valueChanges()
      .subscribe((data) => {
        this.messages = data;
        console.log(data);
    //     // this.myInput = data.map(e => {
    //     //   console.log(e);
    //     //   this.messages.push(e);
    //     // });
        console.log(this.messages, 'myInput');
      });
  }
  ngOnInit() {
    this.username = this.Activated.snapshot.paramMap.get('sendParams');
    console.log(this.username, 'username');
  }
  sendMessage() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message,
    }).then(() => {

    }).catch(() => {

    });
    console.log(this.message, 'sendMessage');
    this.message = '';
  }

  // ionViewWillLeave() {
  //   console.log('user is about to go');
  //   this._ChatSubscription.unsubscribe();
  //   this.db.list('/chat').push({
  //     specialMessage: true,
  //     message: `${this.username} has joined the room`
  //   });
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ChatPage');
  //   this.db.list('/chat').push({
  //     specialMessage: true,
  //     message: `${this.username} has joined the room`
  //   });
  // }
}
