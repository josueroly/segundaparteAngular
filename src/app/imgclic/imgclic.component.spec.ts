import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgclicComponent } from './imgclic.component';

describe('ImgclicComponent', () => {
  let component: ImgclicComponent;
  let fixture: ComponentFixture<ImgclicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgclicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgclicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
