/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    /**
     * 头像
     */
    avatarUrl: string;
    /**
     * 数字 uid
     */
    uid: string;
    /**
     * 昵称
     */
    nickName: string;
    /**
     * 是否为黑名单用户
     */
    isBlack: boolean;
    /**
     * 租户 ID
     */
    tenantId: User.tenantId;
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

export namespace User {

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }


}

