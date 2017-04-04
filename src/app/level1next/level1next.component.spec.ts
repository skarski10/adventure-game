import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1nextComponent } from './level1next.component';

describe('Level1nextComponent', () => {
  let component: Level1nextComponent;
  let fixture: ComponentFixture<Level1nextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1nextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1nextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
