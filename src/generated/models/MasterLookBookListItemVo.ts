/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LookBookVideo } from './LookBookVideo';

export type MasterLookBookListItemVo = {
    /**
     * 型录类型
     */
    lookBookType: MasterLookBookListItemVo.lookBookType;
    /**
     * 图片, lookBookType 为 image 时存在
     */
    images?: Array<string>;
    /**
     * 视频, lookBookType 为 video 时存在
     */
    vid?: string;
    /**
     * 暂时停用
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
    lookBookStatus: MasterLookBookListItemVo.lookBookStatus;
    /**
     * 租户 ID
     */
    tenantId: MasterLookBookListItemVo.tenantId;
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

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }


}

