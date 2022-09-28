/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PrivateUpdateShippingAddressDto = {
    /**
     * 收件人姓名
     */
    consigneeName?: string;
    /**
     * 手机号
     */
    phoneNumber?: string;
    /**
     * 邮编
     */
    postalCode?: string;
    /**
     * 国标收货地址第一级地址, 省
     */
    provinceName?: string;
    /**
     * 国标收货地址第二级地址, 市
     */
    cityName?: string;
    /**
     * 国标收货地址第三级地址, 区
     */
    countyName?: string;
    /**
     * 国标收货地址第四级地址, 街道
     */
    streetName?: string;
    /**
     * 详细收货地址信息（不含街道）
     */
    detailInfo?: string;
    /**
     * 收货地址国家码
     */
    nationalCode?: string;
    /**
     * 是否为默认地址
     */
    isDefault?: boolean;
};

