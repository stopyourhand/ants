package com.ants.dao.give;

import com.ants.entity.give.Give;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author czd
 * 赠送相关的方法均在此数据层
 */
@Repository
public interface GiveDao {
    /**
     * 添加赠送物品
     * @param give
     * @return
     */
    public int addGiveGoods(Give give);


    /**
     * 根据学生账户获取此学生发布的赠送的商品
     * @param map
     * @return
     */
    public List<Give> myGiveGoods(Map<String,Integer> map);

    /**
     * 根据学生账户获取此学生发布的赠送的商品的总数量
     * @param studentId
     * @return
     */
    public Integer myGiveGoodsNums(Integer studentId);
}