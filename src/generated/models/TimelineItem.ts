/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimelineItemContent } from './TimelineItemContent';

export type TimelineItem = {
    /**
     * 内容
     */
    contents: Array<TimelineItemContent>;
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

