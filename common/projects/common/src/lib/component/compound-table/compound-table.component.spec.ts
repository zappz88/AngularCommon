import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundTableComponent } from './compound-table.component';

describe('CompoundTableComponent', () => {
  let component: CompoundTableComponent;
  let fixture: ComponentFixture<CompoundTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompoundTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
