import { postComponent } from './postComponent';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Post Component', () => {
    let component: postComponent;

    //only once
    //before -> setup
    //after -> teardown
    beforeAll(() => { });

    afterAll(() => {
        component = null;
    });

    //every time for a spec
    beforeEach(() => {
        //Arrange
        component = new postComponent();
        component.totalLikes = 3;
    });

    afterEach(() => { });

    it('Should increase likes', () => {
        //Act
        component.like();
        //Assert
        expect(component.totalLikes).toBe(4);
    })

    it('Should decrease likes', () => {
        component.dislike();
        expect(component.totalLikes).toBe(2);
    })

    it('Should decrease likes only if the total likes is not 0', () => {
        component.totalLikes = 0;
        component.dislike();
        expect(component.totalLikes).not.toBe(-1);
    })
})

describe('Integration Tests : Post Component', () => {
    let component: postComponent;
    let fixture: ComponentFixture<postComponent>;
  
    beforeEach(async () => {
      TestBed.configureTestingModule({
        imports: [MaterialModule, BrowserAnimationsModule],
        declarations: [postComponent]
      }).compileComponents();
    });
  
    beforeEach(async () => {
      fixture = TestBed.createComponent(postComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('Should Create', () => {
      expect(component).toBeTruthy();
    });
  
    it('Should Display Global total Likes', async () => {
      let debugElement = fixture.debugElement.query(By.css('.globalTotalLikes'));
      let htmlElement: HTMLElement = debugElement.nativeElement;
      expect(htmlElement.innerText).toContain('4');
    });

})