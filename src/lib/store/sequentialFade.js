import { writable } from 'svelte/store';

export const fadeSequence = writable({
    hero: false,
    navbar: false,
    text: false
});

export function startFadeSequence() {
    // Reset all to invisible
    fadeSequence.set({
        hero: false,
        navbar: false,
        text: false
    });

    // Sequence the fades
    setTimeout(() => {
        fadeSequence.update(seq => ({ ...seq, hero: true })); // Center fades first

        setTimeout(() => {
            fadeSequence.update(seq => ({ ...seq, navbar: true })); // Navbar fades second

            setTimeout(() => {
                fadeSequence.update(seq => ({ ...seq, text: true })); // Text fades last
            }, 3000); // 0.5s after navbar

        }, 6000); // 0.5s after center

    }, 500); // Small initial delay
}