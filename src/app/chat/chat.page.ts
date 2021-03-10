import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  providers: [NavParams],
  
})
export class ChatPage implements OnInit {
  username: string = '';
  message: string = '';
  myInput;
  _ChatSubscription;
  messages: Object[] = [];
  myDate;
  constructor(
    public navCtrl: NavController,
    public NavParams: NavParams,
    public Activated: ActivatedRoute,
    public db: AngularFireDatabase,
  ) {
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
        // console.log(this.messages, 'myInput');
      });
  }
  ngOnInit() {
    this.username = this.Activated.snapshot.paramMap.get('sendParams');
    // console.log(this.username, 'username');
  }
  sendMessage() {
    const DateTime = new Date();
    this.myDate = DateTime.toISOString();
    if (this.message == '' || this.username == '') {
      console.log('Error');
      return false;
    } else { 
      this.db
        .list('/chat')
        .push({
          username: this.username,
          message: this.message,
          date: this.myDate
        });
        console.log('sendMessage');
    }
    this.message = '';
  }
  // DeleteItem(item: a) {
  //   this.db.list('/chat/').remove(item);
  // }
}
