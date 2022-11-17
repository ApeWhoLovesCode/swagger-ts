/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMasterInfoDto = {
    /**
     * 新密码
     */
    newPassword?: string;
    /**
     * 旧密码
     */
    oldPassword?: string;
    /**
     * 名称
     */
    masterName?: string;
    /**
     * 头像（不含域名）
     */
    avatar?: string;
};

