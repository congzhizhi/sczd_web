import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangentComponent } from './mangent.component';

describe('MangentComponent', () => {
  let component: MangentComponent;
  let fixture: ComponentFixture<MangentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
