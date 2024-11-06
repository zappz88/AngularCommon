import { animate, state, style, transition, trigger} from "@angular/animations"

export const fadeIn = 
    trigger('fadeIn', [
        state('fadeIn', style({
            opacity: 1,
        })),
        transition('* => fadeIn', [
            animate('3s')
        ]),
    ]);

export const fadeOut = 
    trigger('fadeOut', [
        state('fadeOut', style({
            opacity: 0,
        })),
        transition('* => fadeOut', [
            animate('3s')
        ]),
    ]);