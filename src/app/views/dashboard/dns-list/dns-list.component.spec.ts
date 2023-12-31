import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsListComponent } from './dns-list.component';

describe('DnsListComponent', () => {
  let component: DnsListComponent;
  let fixture: ComponentFixture<DnsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DnsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
