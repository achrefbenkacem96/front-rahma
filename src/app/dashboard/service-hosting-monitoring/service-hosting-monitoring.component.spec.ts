import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHostingMonitoringComponent } from './service-hosting-monitoring.component';

describe('ServiceHostingMonitoringComponent', () => {
  let component: ServiceHostingMonitoringComponent;
  let fixture: ComponentFixture<ServiceHostingMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceHostingMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceHostingMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
