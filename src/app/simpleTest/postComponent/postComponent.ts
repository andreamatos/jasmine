import { Component } from '@angular/core';

export interface Post{
    title:string;
    description:string;
    totalLikes:number;
}

@Component({
    selector: 'app-post',
    templateUrl: './postComponent.html',
    styleUrls: ['./postComponent.less']
})

export class postComponent {
    totalLikes: number;
    globalTotalLikes = 4;

    like() {
        this.totalLikes++;
    }

    dislike() {
        if (this.totalLikes)
            this.totalLikes--;
    }

}