/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MasterSnap } from './MasterSnap';

export type Note = {
    /**
     * 内容
     */
    content: string;
    /**
     * 管理员信息
     */
    masterSnap: MasterSnap;
    /**
     * 创建时间
     */
    createdAt: number;
};

