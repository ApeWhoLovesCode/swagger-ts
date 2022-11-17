/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShippingAddress = {
  /**
   * 用户 ID
   */
  userId: string;
  /**
   * 收货人姓名
   */
  consigneeName: string;
  /**
   * 手机号
   */
  phoneNumber: string;
  /**
   * 邮编
   */
  postalCode: string;
  /**
   * 国标收货地址第一级地址
   */
  provinceName: string;
  /**
   * 国标收货地址第二级地址
   */
  cityName: string;
  /**
   * 国标收货地址第三级地址
   */
  countyName: string;
  /**
   * 国标收货地址第四级地址
   */
  streetName?: string;
  /**
   * 详细收货地址信息（不含街道）
   */
  detailInfo: string;
  /**
   * 收货地址国家码
   */
  nationalCode: string;
  /**
   * 是否为默认地址
   */
  isDefault: boolean;
  /**
   * 租户 ID
   */
  tenantId: ShippingAddress.tenantId;
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

export namespace ShippingAddress {

  /**
   * 租户 ID
   */
  export enum tenantId {
    SW = 'sw',
    SV = 'sv',
    _424 = '424',
  }


}

