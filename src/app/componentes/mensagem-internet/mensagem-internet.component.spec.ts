import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemInternetComponent } from './mensagem-internet.component';

describe('MensagemInternetComponent', () => {
  let component: MensagemInternetComponent;
  let fixture: ComponentFixture<MensagemInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
