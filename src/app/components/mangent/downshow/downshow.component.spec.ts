import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownshowComponent } from './downshow.component';

describe('DownshowComponent', () => {
  let component: DownshowComponent;
  let fixture: ComponentFixture<DownshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
