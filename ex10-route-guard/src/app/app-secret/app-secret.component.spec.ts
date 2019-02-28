import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecretComponent } from './app-secret.component';

describe('AppSecretComponent', () => {
  let component: AppSecretComponent;
  let fixture: ComponentFixture<AppSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
