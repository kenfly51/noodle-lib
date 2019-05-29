import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'noodle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    @Input() loading: boolean = false;
    @Input() submitted: boolean = false;
    @Output() login = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }
      const { username, password } = this.f;
      this.login.emit({username: username.value, password: password.value});
    }
}
