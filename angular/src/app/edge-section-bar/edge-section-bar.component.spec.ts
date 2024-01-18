import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeSectionBarComponent } from './edge-section-bar.component';

describe('EdgeSectionBarComponent', () => {
  let component: EdgeSectionBarComponent;
  let fixture: ComponentFixture<EdgeSectionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeSectionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeSectionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
