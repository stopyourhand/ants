package com.ants.entity.personal;

import lombok.Data;
import org.springframework.stereotype.Component;

/**
 * @Author: CB#
 * @Date: 2019/5/22
 * @Description: com.ants.entity
 * @version: 1.0
 */
@Component
@Data
public class Student {
    private int studentId;
    private String userName;
    private int userSex; //0:男   1：女
    private String passWord;
    private String unpw;//存放的是一起加密过后的密码
    private String mobilePhone;
    private String address;//交易地址
    private String portrait;//头像图片
    private String userWechat;
    private String userQQ;
    private String registTime;//注册时间
    private int qqHidden;//是否隐藏QQ:0:隐藏 1:不隐藏
    private int wechatHidden;//是否隐藏微信:0:隐藏 1:不隐藏


}