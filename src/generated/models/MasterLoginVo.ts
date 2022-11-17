/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Master } from './Master';

export type MasterLoginVo = {
    /**
     * sessionToken
     */
    sessionToken: string;
    /**
     * master 用户信息
     */
    master: Master;
};

