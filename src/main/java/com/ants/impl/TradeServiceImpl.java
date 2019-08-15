package com.ants.impl;

import com.ants.dao.TradeDao;
import com.ants.entity.Trade;
import com.ants.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author czd
 * 正在交易中相关的代码均在此服务层实现类
 */
@Service
public class TradeServiceImpl implements TradeService {

    @Autowired
    private TradeDao tradeDao;

    /**
     * 根据学生学号获取此账号下正在交易的商品，包括闲置，租赁和赠送
     * @param studentId
     * @return
     */
    public List<Trade> myTradeGoods(Integer studentId){
        return tradeDao.myTradeGoods(studentId);
    }
}