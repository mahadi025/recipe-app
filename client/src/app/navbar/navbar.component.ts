import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/recipes');
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

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
