import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MousewheelComponent } from './mousewheel.component';

describe('MousewheelComponent', () => {
  let component: MousewheelComponent;
  let fixture: ComponentFixture<MousewheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousewheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousewheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
