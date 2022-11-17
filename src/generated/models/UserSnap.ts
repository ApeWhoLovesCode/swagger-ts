/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSnap = {
    /**
     * 头像
     */
    avatarUrl: string;
    /**
     * ID
     */
    _id: string;
    /**
     * 创建时间
     */
    createdAt: number;
    /**
     * 租户 ID
     */
    tenantId: UserSnap.tenantId;
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
};

export namespace UserSnap {

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }


}

