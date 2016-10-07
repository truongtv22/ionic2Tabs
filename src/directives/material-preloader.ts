import { Component, Input, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'material-preloader',
  templateUrl: 'material-preloader.html'
})

export class MaterialPreloader {
  @Input() active: boolean = true;
  @Input() config: Options;

  constructor(
    private renderer: Renderer,
    private element: ElementRef
  ) {
    this.config = (<any>Object).assign({}, configDefaults, this.config);
  }

  ngAfterViewInit() {
    let el = this.element.nativeElement.children.materialPreloader;

    this.renderer.setElementStyle(el, 'height', this.config.height);
    this.renderer.setElementStyle(el, this.config.position, '0px');
    this.renderer.setElementStyle(el, 'left', '0px');
  }
}

export interface Options {
  height?: string,
  position?: string,
  col1?: string,
  col2?: string,
  col3?: string,
  col4?: string
}

export const configDefaults: Options = {
  height: '3px',
  position: 'top',
  col1: '#159756',
  col2: '#da4733',
  col3: '#3b78e7',
  col4: '#fdba2c'
}