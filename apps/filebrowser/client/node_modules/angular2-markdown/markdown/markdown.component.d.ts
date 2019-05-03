import { ElementRef, OnInit } from '@angular/core';
import { MarkdownService } from './markdown.service';
export declare class MarkdownComponent implements OnInit {
    private mdService;
    private el;
    private platformId;
    private _path;
    private _data;
    private _md;
    private _ext;
    changeLog: string[];
    constructor(mdService: MarkdownService, el: ElementRef, platformId: string);
    ngOnInit(): void;
    path: string;
    data: string;
    onDataChange(data: string): void;
    /**
     *  After view init
     */
    ngAfterViewInit(): void;
    processRaw(): void;
    /**
     * get remote conent;
     */
    onPathChange(): void;
    /**
     * catch http error
     */
    private handleError(error);
    /**
     * Prepare string
     */
    prepare(raw: string): string;
    /**
     * Trim left whitespace
     */
    private trimLeft(line);
    /**
     * Use Prism to highlight code snippets only on the browser
     * @param {string} async param passed directly to Prism.highlightAll
     */
    private highlightContent(async);
}
