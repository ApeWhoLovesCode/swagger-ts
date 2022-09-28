/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicLookBookVo = {
    /**
     * 视频链接
     */
    video?: string;
    /**
     * 型录类型
     */
    lookBookType: PublicLookBookVo.lookBookType;
    /**
     * 图片, lookBookType 为 image 时存在
     */
    images?: Array<string>;
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
};

export namespace PublicLookBookVo {

    /**
     * 型录类型
     */
    export enum lookBookType {
        IMAGE = 'image',
        VIDEO = 'video',
    }


}

