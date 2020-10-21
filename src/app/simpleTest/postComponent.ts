export class postComponent {
    totaislLikes: number;

    ngOnInit(): void{

    }

    like() {
        this.totaislLikes++;
    }

    dislike() {
        if (this.totaislLikes)
            this.totaislLikes--;
    }

}