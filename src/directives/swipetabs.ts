import { Directive, Input, ElementRef } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

@Directive({
  selector: '[swipetabs]',
  host: {
    '(swipe)': 'swipe($event)'
  }
})

export class SwipeTabs {
  tabs: Tabs;
  @Input('swipetabs') pos: number;

  constructor(
    private element: ElementRef,
    private navCtrl: NavController
  ) {
    this.tabs = navCtrl.parent;
  }

  swipe(event: any) {
    // DIRECTION_LEFT: 2
    if(event.offsetDirection == 2) {
      this.moveTabRight(this.pos);
    }

    // DIRECTION_RIGHT: 4
    if(event.offsetDirection == 4) {
      this.moveTabLeft(this.pos);
    }
  }

  moveTabRight(pos: number) {
    if(pos == 0) {
      this.tabs.select(1);
    }
    else if(pos == 1) {
      this.tabs.select(2);
    }
  }

  moveTabLeft(pos: number) {
    if(pos == 1) {
      this.tabs.select(0);
    }
    else if(pos == 2) {
      this.tabs.select(1);
    }
  }
}