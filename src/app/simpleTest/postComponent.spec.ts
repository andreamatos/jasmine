import { postComponent } from "./postComponent"

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
        component.totaislLikes = 3;
    });

    afterEach(() => { });

    it('Should increase likes', () => {
        //Act
        component.like();
        //Assert
        expect(component.totaislLikes).toBe(4);
    })

    it('Should decrease likes', () => {
        component.dislike();
        expect(component.totaislLikes).toBe(2);
    })

    it('Should decrease likes only if the total likes is not 0', () => {
        component.totaislLikes = 0;
        component.dislike();
        expect(component.totaislLikes).not.toBe(-1);
    })
})