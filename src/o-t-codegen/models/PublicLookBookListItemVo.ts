/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicLookBookListItemVo = {
    /**
     * 封面图或视频链接, 根据 lookBookType 判断
     */
    cover: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 联名发布时间戳, lookBookType 为 image 时存在
     */
    releaseTime?: number;
};

