import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTodoComponent } from './edita-tarefa.component';

describe('EditaTodoComponent', () => {
  let component: EditaTodoComponent;
  let fixture: ComponentFixture<EditaTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
