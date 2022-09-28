/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MasterLookBookListItemVo = {
    /**
     * 封面图或视频链接, 根据 lookBookType 判断
     */
    cover: string;
    /**
     * 型录类型
     */
    lookBookType: MasterLookBookListItemVo.lookBookType;
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
    lookBookStatus: MasterLookBookListItemVo.lookBookStatus;
};

export namespace MasterLookBookListItemVo {

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

