import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiComponent } from './inspi.component';

describe('InspiComponent', () => {
  let component: InspiComponent;
  let fixture: ComponentFixture<InspiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
