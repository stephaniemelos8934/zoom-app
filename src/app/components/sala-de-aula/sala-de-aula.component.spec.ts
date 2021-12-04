import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDeAulaComponent } from './sala-de-aula.component';

describe('SalaDeAulaComponent', () => {
  let component: SalaDeAulaComponent;
  let fixture: ComponentFixture<SalaDeAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaDeAulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDeAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
