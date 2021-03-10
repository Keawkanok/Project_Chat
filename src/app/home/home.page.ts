import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public router: Router,
    public db: AngularFireDatabase
  ) {
    // console.log(this.username);
  }

  loginUser() {
    if (/^[a-zA-Z0-9]+$/.test(this.username)) {
      this.navCtrl.navigateForward('/chat/' + this.username);
      // console.log(this.username);

      this.db.list('/chat').push({
        specialMessage: true,
        message: `${this.username} has joined the room`,
      });
    } else {
      this.alert('Error', 'Invalid Username');
    }
  }

  async alert(title: string, message: string) {
    let alertBox = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      subHeader: message,
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alertBox.present();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ChatPage');

  // }
}
