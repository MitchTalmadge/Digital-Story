import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {animate, AnimationBuilder, style} from "@angular/animations";
import {MTChapter} from "../../../model/mt-chapter.model";

@Component({
    selector: 'mt-navigation',
    templateUrl: 'mt-navigation.component.html',
    styleUrls: ['mt-navigation.component.css']
})

export class MTNavigationComponent implements OnInit, AfterViewInit {

    /**
     * The index of the current chapter on the carousel.
     */
    currentChapter: number = 0;

    /**
     * Whether or not animation is currently in progress.
     */
    animating: boolean = false;

    /**
     * The chapters of the story.
     */
    @Input()
    chapters: MTChapter[] = [];

    @Output()
    chapterIndexChange: EventEmitter<number> = new EventEmitter<number>();

    @ViewChild("previousLabel")
    previousLabel: ElementRef;

    @ViewChild("currentLabel")
    currentLabel: ElementRef;

    constructor(private animationBuilder: AnimationBuilder) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        (<HTMLDivElement>this.currentLabel.nativeElement).innerHTML = this.chapters.length > 0 ? this.chapters[0].label : "";
    }

    onLeftArrowClicked(): void {
        if (this.animating)
            return;

        if (this.currentChapter > 0) {
            this.currentChapter--;
            this.chapterIndexChange.emit(this.currentChapter);

            // Init previous label
            (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = this.chapters[this.currentChapter].label;
            (<HTMLDivElement>this.previousLabel.nativeElement).style.transform = "translateX(-100%)";

            // Init current label
            (<HTMLDivElement>this.currentLabel.nativeElement).innerHTML = this.chapters[this.currentChapter + 1].label;
            (<HTMLDivElement>this.currentLabel.nativeElement).style.transform = null;

            // Animations
            let previousAnimationFactory = this.animationBuilder.build([
                animate("1s ease-in-out", style({transform: "translateX(0%)"}))
            ]);

            let currentAnimationFactory = this.animationBuilder.build([
                animate("1s ease-in-out", style({transform: "translateX(100%)"}))
            ]);

            this.animating = true;

            let previousAnimation = previousAnimationFactory.create(this.previousLabel.nativeElement);
            previousAnimation.onDone(() => {
                (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = null;
                (<HTMLDivElement>this.previousLabel.nativeElement).style.transform = null;
                previousAnimation.destroy();
            });
            previousAnimation.play();

            let currentAnimation = currentAnimationFactory.create(this.currentLabel.nativeElement);
            currentAnimation.onDone(() => {
                (<HTMLDivElement>this.currentLabel.nativeElement).innerHTML = this.chapters[this.currentChapter].label;
                (<HTMLDivElement>this.currentLabel.nativeElement).style.transform = null;
                currentAnimation.destroy();
                this.animating = false;
            });
            currentAnimation.play();
        }
    }

    onRightArrowClicked(): void {
        if (this.animating)
            return;

        if (this.currentChapter < this.chapters.length - 1) {
            this.currentChapter++;
            this.chapterIndexChange.emit(this.currentChapter);

            // Init previous label
            (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = this.chapters[this.currentChapter - 1].label;
            (<HTMLDivElement>this.previousLabel.nativeElement).style.transform = null;

            // Init current label
            (<HTMLDivElement>this.currentLabel.nativeElement).innerHTML = this.chapters[this.currentChapter].label;
            (<HTMLDivElement>this.currentLabel.nativeElement).style.transform = "translateX(100%)";

            // Animations
            let previousAnimationFactory = this.animationBuilder.build([
                animate("1s ease-in-out", style({transform: "translateX(-100%)"}))
            ]);

            let currentAnimationFactory = this.animationBuilder.build([
                animate("1s ease-in-out", style({transform: "translateX(0%)"}))
            ]);

            this.animating = true;

            let previousAnimation = previousAnimationFactory.create(this.previousLabel.nativeElement);
            previousAnimation.onDone(() => {
                (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = null;
                (<HTMLDivElement>this.previousLabel.nativeElement).style.transform = null;
                previousAnimation.destroy();
            });
            previousAnimation.play();

            let currentAnimation = currentAnimationFactory.create(this.currentLabel.nativeElement);
            currentAnimation.onDone(() => {
                (<HTMLDivElement>this.previousLabel.nativeElement).innerHTML = this.chapters[this.currentChapter].label;
                (<HTMLDivElement>this.currentLabel.nativeElement).style.transform = null;
                currentAnimation.destroy();
                this.animating = false;
            });
            currentAnimation.play();
        }
    }
}