import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownupComponent } from './downup.component';

describe('DownupComponent', () => {
  let component: DownupComponent;
  let fixture: ComponentFixture<DownupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
