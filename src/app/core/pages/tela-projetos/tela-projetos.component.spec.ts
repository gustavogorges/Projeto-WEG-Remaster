import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaProjetosComponent } from './tela-projetos.component';

describe('TelaProjetosComponent', () => {
  let component: TelaProjetosComponent;
  let fixture: ComponentFixture<TelaProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
