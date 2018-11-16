import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteComponent } from './newnote.component';

describe('NewnoteComponent', () => {
    let component: NewNoteComponent;
    let fixture: ComponentFixture<NewNoteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewNoteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewNoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});