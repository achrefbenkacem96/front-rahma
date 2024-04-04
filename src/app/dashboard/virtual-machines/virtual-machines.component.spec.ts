import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachinesComponent } from './virtual-machines.component';

describe('VirtualMachinesComponent', () => {
  let component: VirtualMachinesComponent;
  let fixture: ComponentFixture<VirtualMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualMachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
