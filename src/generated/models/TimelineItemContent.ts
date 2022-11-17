/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TimelineItemContent = {
    /**
     * 内容
     */
    content: string;
    /**
     * 类型
     */
    type: TimelineItemContent.type;
};

export namespace TimelineItemContent {

    /**
     * 类型
     */
    export enum type {
        TEXT = 'Text',
    }


}

