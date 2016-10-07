import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Tabs, Tab } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  blank: any = BlankPage;

  tabIndex: number = 0;
  slideIndex: number = 0;

  @ViewChild('mySlider') slider: Slides;
  @ViewChild('myTabs') tabs: Tabs;

  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {}

  onTabsChange(tab: Tab) {
    this.tabIndex = this.tabs.getIndex(tab);

    document.title = tab.tabTitle;

    if(this.tabIndex != this.slideIndex)
      this.slider.slideTo(this.tabIndex);
  }

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();

    if(this.tabIndex != this.slideIndex)
      this.tabs.select(this.slideIndex);
  }
}

@Component({
  template: `
    <ion-content class="blank"></ion-content>
  `
})
export class BlankPage {}