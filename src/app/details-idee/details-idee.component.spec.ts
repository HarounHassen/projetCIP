import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIdeeComponent } from './details-idee.component';

describe('DetailsIdeeComponent', () => {
  let component: DetailsIdeeComponent;
  let fixture: ComponentFixture<DetailsIdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsIdeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
