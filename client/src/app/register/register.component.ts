import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter()
  model: any = {};
  registerForm: FormGroup;
  constructor(private accountService: AccountService, public toastr: ToastrService) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    })
  }

  register() {
    // this.accountService.register(this.model).subscribe(response => {
    //   console.log(response);
    //   this.cancel();
    // }, error => {
    //   this.toastr.error(error.error);
    // })
    console.log(this.registerForm.value);
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
