import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModealEquipesComponent } from './modeal-equipes.component';

describe('ModealEquipesComponent', () => {
  let component: ModealEquipesComponent;
  let fixture: ComponentFixture<ModealEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModealEquipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModealEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
