import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCanvasLoaderComponent } from './svg-canvas-loader.component';

describe('SvgCanvasLoaderComponent', () => {
  let component: SvgCanvasLoaderComponent;
  let fixture: ComponentFixture<SvgCanvasLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgCanvasLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgCanvasLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
