import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodleLibComponent } from './noodle-lib.component';

describe('NoodleLibComponent', () => {
  let component: NoodleLibComponent;
  let fixture: ComponentFixture<NoodleLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoodleLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
