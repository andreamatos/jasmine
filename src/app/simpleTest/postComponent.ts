export class postComponent {
    totaislLikes: number;

    like() {
        this.totaislLikes++;
    }

    dislike() {
        if (this.totaislLikes)
            this.totaislLikes--;
    }

}