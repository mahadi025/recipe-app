import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model: any = {};

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
        Object.keys(error.error).forEach((key) => {
          const errorMessage = error.error[key][0];
          this.toastr.error(errorMessage);
        });
      },
    });
  }
  cancel() {
    this.router.navigateByUrl('/');
  }
}
