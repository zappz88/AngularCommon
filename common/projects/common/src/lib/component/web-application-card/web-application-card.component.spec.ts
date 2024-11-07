import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApplicationCardComponent } from './web-application-card.component';

describe('WebApplicationCardComponent', () => {
  let component: WebApplicationCardComponent;
  let fixture: ComponentFixture<WebApplicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebApplicationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebApplicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
