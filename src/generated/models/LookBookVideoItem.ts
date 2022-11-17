/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LookBookVideoItem = {
    /**
     * 视频地址
     */
    url?: string;
    /**
     * 转码状态
     */
    state: LookBookVideoItem.state;
};

export namespace LookBookVideoItem {

    /**
     * 转码状态
     */
    export enum state {
        SUBMITTED = 'Submitted',
        TRANSCODING = 'Transcoding',
        TRANSCODE_SUCCESS = 'TranscodeSuccess',
        TRANSCODE_FAIL = 'TranscodeFail',
        TRANSCODE_CANCELLED = 'TranscodeCancelled',
    }


}

