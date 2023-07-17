import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsarioComponent } from './edit-usario.component';

describe('EditUsarioComponent', () => {
  let component: EditUsarioComponent;
  let fixture: ComponentFixture<EditUsarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUsarioComponent]
    });
    fixture = TestBed.createComponent(EditUsarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
