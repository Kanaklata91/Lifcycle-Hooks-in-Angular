import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnChanges, OnInit, DoCheck {
  @Input() val: string;

  ngOnInit() {
    setTimeout(() => {
      console.log('Test');
    }, 2000);
    console.log('ngOInit called.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('The changes are:', changes);

    if (!changes['val'].isFirstChange()) {
      this.val = 'Hello - > ' + this.val;
    } else {
      this.val = changes['val'].currentValue;
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck called.');
  }
}
