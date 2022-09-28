/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegisterMasterDto = {
    /**
     * email
     */
    email: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 名称
     */
    masterName: string;
    /**
     * 头像（不含域名）
     */
    avatar?: string;
};

