import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registration';
  user: User = new User();
  idnum = 0;
  users: User[] = [];
  reg_name = '';
  reg_email =  '';
  reg_addr = '';

  onSubmit(event: Event, formData: NgForm) {
    event.preventDefault();
    if (formData.valid) {
      this.reg_name = this.user.first_name;
      this.reg_email = this.user.email;
      this.reg_addr = `${this.user.streetaddr1} ${this.user.streetaddr2} ${this.user.city}, ${this.user.state}`;
      this.user.id = this.idnum;
      this.idnum++;
      this.users.push(this.user);
      this.user = new User();
      formData.reset();
    } else {
      this.reg_name = '';
      this.reg_email = '';
      this.reg_addr = '';
    }
  }
}
