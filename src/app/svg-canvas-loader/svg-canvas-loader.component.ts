import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-svg-canvas-loader',
  template: `<div #wrapper> <canvas #canvas></canvas> </div>`,
  styleUrls: ['./svg-canvas-loader.component.css']
})
export class SvgCanvasLoaderComponent implements OnInit, AfterViewInit {
 
  @ViewChild('canvas') public canvas: ElementRef;
  @ViewChild('wrapper') public wrapper: ElementRef;
  private cx: CanvasRenderingContext2D;

  private newImg: HTMLImageElement;

  constructor() { }

  ngOnInit(): void {
    this.newImg = <HTMLImageElement>(document.createElement('img'));

    //const image: ImageBitmap = new ImageBitmap();

    //var xml = (new XMLSerializer).serializeToString(svg);
    //img.src = "data:image/svg+xml;charset=utf-8,"+xml;

    //newImg.src = 'assets/svg/TopViewCage.svg';
    this.newImg.src = 'assets/TopViewDetails.png';
    this.newImg.onload = (event) => {
      this.cx.drawImage(this.newImg, 0, 0);
    };

    document.body.appendChild(this.newImg);
  }

  public ngAfterViewInit() {


    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;

    // set the width and height
    canvasEl.width = 500;
    canvasEl.height = 500;

    this.cx = canvasEl.getContext('2d');
    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.strokeStyle = '#000';
    this.cx.beginPath();
    this.cx.moveTo(0, 0);
    this.cx.lineTo(500, 500);
    this.cx.stroke();
  }
}
