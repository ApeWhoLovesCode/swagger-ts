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
};

export namespace Banner {

    /**
     * 资源类型
     */
    export enum resourceType {
        ARTICLE = 'article',
    }


}

