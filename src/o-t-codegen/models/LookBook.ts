/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LookBookVideo } from './LookBookVideo';

export type LookBook = {
    /**
     * 型录类型
     */
    lookBookType: LookBook.lookBookType;
    /**
     * 图片, lookBookType 为 image 时存在
     */
    images?: Array<string>;
    /**
     * 视频, lookBookType 为 video 时存在
     */
    video?: LookBookVideo;
    /**
     * 标题
     */
    title: string;
    /**
     * 说明, lookBookType 为 image 时存在
     */
    description?: string;
    /**
     * 联名发布时间戳, lookBookType 为 image 时存在
     */
    releaseTime?: number;
    /**
     * 型录状态
     */
    lookBookStatus: LookBook.lookBookStatus;
};

export namespace LookBook {

    /**
     * 型录类型
     */
    export enum lookBookType {
        IMAGE = 'image',
        VIDEO = 'video',
    }

    /**
     * 型录状态
     */
    export enum lookBookStatus {
        DRAFT = 'draft',
        PUBLISHED = 'published',
    }


}

