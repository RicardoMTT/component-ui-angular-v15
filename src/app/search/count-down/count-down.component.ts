import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent {
  @Input() duration: number = 100; // Duración del temporizador en segundos
  remainingTime: string = "";

  ngOnInit() {
    console.log('2');
    
    this.startTimer();
  }

  startTimer() {
    let seconds = this.duration;
    const interval = setInterval(() => {
      if (seconds > 0) {
        const minutes = Math.floor(seconds / 60); // Redonder el numero hacia abajo al entero mas cercano
        const remainingSeconds = seconds % 60;
        this.remainingTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        seconds--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}