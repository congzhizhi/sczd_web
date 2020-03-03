import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdownComponent } from './newdown.component';

describe('NewdownComponent', () => {
  let component: NewdownComponent;
  let fixture: ComponentFixture<NewdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
