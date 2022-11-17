/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicLookBookVo = {
    /**
     * ID
     */
    _id: string;
    /**
     * 创建时间
     */
    createdAt: number;
    /**
     * 最近一次修改时间
     */
    updatedAt: number;
    /**
     * 型录类型
     */
    lookBookType: PublicLookBookVo.lookBookType;
    /**
     * 图片, lookBookType 为 image 时存在
     */
    images?: Array<string>;
    /**
     * 视频, lookBookType 为 video 时存在
     */
    vid?: string;
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

