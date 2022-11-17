/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MasterCreateLookBookDto = {
    /**
     * 租户 ID
     */
    tenantId: MasterCreateLookBookDto.tenantId;
    /**
     * 型录类型
     */
    lookBookType: MasterCreateLookBookDto.lookBookType;
    /**
     * 图片, lookBookType 为 image 时必传
     */
    images?: Array<string>;
    /**
     * 视频, lookBookType 为 video 时必传
     */
    vid?: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 说明, lookBookType 为 image 时必传
     */
    description?: string;
    /**
     * 联名发布时间戳, lookBookType 为 image 时必传
     */
    releaseTime?: number;
    /**
     * 型录状态, 默认为 draft
     */
    lookBookStatus?: MasterCreateLookBookDto.lookBookStatus;
};

export namespace MasterCreateLookBookDto {

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }

    /**
     * 型录类型
     */
    export enum lookBookType {
        IMAGE = 'image',
        VIDEO = 'video',
    }

    /**
     * 型录状态, 默认为 draft
     */
    export enum lookBookStatus {
        DRAFT = 'draft',
        PUBLISHED = 'published',
    }


}

