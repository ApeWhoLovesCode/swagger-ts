/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WechatpayNotifyResourceDto = {
    original_type: WechatpayNotifyResourceDto.original_type;
    ciphertext: string;
    associated_data: string;
    nonce: string;
};

export namespace WechatpayNotifyResourceDto {

    export enum original_type {
        TRANSACTION = 'transaction',
        REFUND = 'refund',
    }


}

