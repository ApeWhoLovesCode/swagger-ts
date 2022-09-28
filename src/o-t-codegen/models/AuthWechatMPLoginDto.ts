/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthWechatMPLoginDto = {
    /**
     * wx.login code
     */
    code: string;
    /**
     * 昵称
     */
    nickName: string;
    /**
     * 头像 URL
     */
    avatarUrl?: string;
};

