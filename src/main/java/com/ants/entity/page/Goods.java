package com.ants.entity.page;

import lombok.Data;
import org.springframework.stereotype.Component;

/**
 * @author czd
 * 对应着ants_goods_base这张数据库表
 * 闲置物品
 */
@Component
@Data
public class Goods {
    private int goodsId;
    private String goodsName;
    private String goodsDescribe;
    private String goodsPicture;
    private String goodsVideo;
    private int goodsClass;
    private double goodsPrice;
    private int goodsState;
    private int goodsBargin;
    private int goodsBelong;
    private int goodsWay;
    private String uploadTime;
    private int repertory;
}