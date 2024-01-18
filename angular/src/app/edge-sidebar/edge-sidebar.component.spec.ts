import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeSidebarComponent } from './edge-sidebar.component';

describe('EdgeSidebarComponent', () => {
  let component: EdgeSidebarComponent;
  let fixture: ComponentFixture<EdgeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
