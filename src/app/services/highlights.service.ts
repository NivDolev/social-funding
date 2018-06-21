import { Injectable } from '@angular/core';

@Injectable( { providedIn: 'root' } )
export class HighlightsService {
    private info = {
        totalBeckers: 148901493,
        fundedProjects: 145647,
        liveProjects: 3877
    };

    getInfo() {
        return this.info;
    }
}
