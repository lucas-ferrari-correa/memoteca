import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeThoughtComponent } from './exclude-thought.component';

describe('ExcludeThoughtComponent', () => {
  let component: ExcludeThoughtComponent;
  let fixture: ComponentFixture<ExcludeThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcludeThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcludeThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
