import { animate, state, style, transition, trigger} from "@angular/animations"

export const fadeInFadeOut = 
    trigger('fadeIn', [
        state('fadeIn', style({
            opacity: 1,
        })),
        state('fadeOut', style({
            opacity: 0,
        })),
        transition('void => fadeIn', [
            animate('3s')
        ]),
        transition('* => fadeOut', [
            animate('3s')
        ]),
    ]);

