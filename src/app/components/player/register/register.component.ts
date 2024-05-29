import { PlayerService } from './../player.service';
import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { Player } from '../player';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  constructor(
    private router: Router
  ) { }

  private playerService = inject(PlayerService);

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    userPlayer: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(3),
      Validators.max(50),
    ]),
    cardMain: new FormControl('', [
      Validators.required,
    ]),
  });


  selectCard(card: string) {
    const divCards = document.querySelector("#divGridCards");
    const divCaptured = document.querySelector("#divCaptured");
    const textSelectCard = document.querySelector(
      "#textSelectCard"
    );

    divCards && divCards.classList.add("hidden");
    divCaptured && divCaptured.classList.remove("hidden");
    divCaptured && divCaptured.classList.add("flex");

    if (textSelectCard) {
      textSelectCard.textContent = `Congratulations your ${card} was captured!`;
      this.form.controls['cardMain'].setValue(card);
    }
  }

  onSubmit() {
    console.log(this.form.valid)
    // if (this.form.valid) {
    this.playerService.create(this.form.value as Player).subscribe({
      next: () => {
        this.router.navigate(['/login']);
        console.log('success!');
      },
      error: () => console.log('error!'),
    });
    // } else {
    // alert("please fill in all fields!")
    // }
  }
}
