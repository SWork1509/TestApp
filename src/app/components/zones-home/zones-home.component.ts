import { Component, DoCheck, NgZone, OnInit } from '@angular/core';


@Component({
  selector: 'app-zones-home',
  templateUrl: './zones-home.component.html',
  styleUrls: ['./zones-home.component.scss']
})
export class ZonesHomeComponent implements OnInit, DoCheck {

  progress: number = 0;
  usages: string[] = [];
  usage = [
    'Mouse move event',
    'Consecutive api call (response of first passed on to second)'
  ]

  constructor(private _zone: NgZone) { }

  ngOnInit(): void {
    this.usages.push(...this.usage)
  }

  ngDoCheck(): void {
    console.log('Change Triggered!!');
  }

  processWithoutAngularZone() {
    this.progress = 0;
    this.increaseProgress(() => console.log('done'))
  }

  increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log('Current Progress', +this.progress);

    if (this.progress < 10) {
      setTimeout(() => {
        this.increaseProgress(doneCallback);
      }, 100)
    } else {
      doneCallback();
    }
  }

  processOutsideOfAngularZone() {
    this.progress = 0;
    this._zone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this._zone.run(() => {
          console.log('Outside Done!!')
        })
      })
    })
  }


}
