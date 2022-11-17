/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Banner = {
    /**
     * 标题
     */
    title: string;
    /**
     * 封面
     */
    cover: string;
    /**
     * 开始展示时间
     */
    startTime: number;
    /**
     * 结束展示时间
     */
    endTime: number;
    /**
     * 位置
     */
    index: number;
    /**
     * 资源类型
     */
    resourceType: Banner.resourceType;
    /**
     * 资源 ID
     */
    resourceId: string;
    /**
     * 租户 ID
     */
    tenantId: Banner.tenantId;
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

export namespace Banner {

    /**
     * 资源类型
     */
    export enum resourceType {
        ARTICLE = 'article',
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

