import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeHeaderComponent } from './edge-header.component';

describe('EdgeHeaderComponent', () => {
  let component: EdgeHeaderComponent;
  let fixture: ComponentFixture<EdgeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
