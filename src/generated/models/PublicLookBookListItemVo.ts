/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicLookBookListItemVo = {
    /**
     * ID
     */
    _id: string;
    /**
     * 视频, lookBookType 为 video 时存在
     */
    vid?: string;
    /**
     * 图片, lookBookType 为 image 时存在
     */
    images?: Array<string>;
    /**
     * 标题
     */
    title: string;
    /**
     * 联名发布时间戳, lookBookType 为 image 时存在
     */
    releaseTime?: number;
};

