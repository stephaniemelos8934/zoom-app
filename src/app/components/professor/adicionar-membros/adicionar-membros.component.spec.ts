import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarMembrosComponent } from './adicionar-membros.component';

describe('AdicionarMembrosComponent', () => {
  let component: AdicionarMembrosComponent;
  let fixture: ComponentFixture<AdicionarMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarMembrosComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
