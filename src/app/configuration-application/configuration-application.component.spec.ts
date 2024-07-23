import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationApplicationComponent } from './configuration-application.component';

describe('ConfigurationApplicationComponent', () => {
  let component: ConfigurationApplicationComponent;
  let fixture: ComponentFixture<ConfigurationApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigurationApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurationApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
