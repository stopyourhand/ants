package com.ants.controller.trade;

import com.ants.entity.trade.Trade;
import com.ants.service.trade.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author czd
 * 正在交易中相关的代码均在此控制器
 */
@Controller
@RequestMapping(value = "/ants/trade")
public class TradeController {
    @Autowired
    private TradeService tradeService;

    /**
     * 根据学生学号获取此账号下正在交易的商品，包括闲置，租赁，寻求和赠送
     * @param request
     * @param type
     * @param currentPage
     * @return
     */
    @RequestMapping(value = "/myTradeGoods",method = RequestMethod.GET)
    @ResponseBody
    public Map myTradeGoods(HttpServletRequest request,
                            int type,
                            Integer currentPage){
        Map tradeGoods = new HashMap<>();

        //设置map用来保存myTradeGoods方法中的参数信息
        Map<String, Integer> parameterMap = new HashMap();

        //设置map用来保存myTradingGoodsNums方法中的参数信息
        Map<String, Integer> paramMap = new HashMap();


        //获取学生的学号，即登录此账户的用户
        Integer studentId = 2;//(Integer)request.getSession().getAttribute("studentId");

        //获取当前页数对应的数据库limit的head的值，以便获取对应数据库的限制输出的数据
        int head = (currentPage - 1) * 8;

        //获取当前页数对应的数据库limit的tail的值，以便获取对应数据库的限制输出的数据
        int tail = head + 8;


        //保存myTradeGoods参数信息
        parameterMap.put("goodsBelong", studentId);
        parameterMap.put("head", head);
        parameterMap.put("tail", tail);

        //保存myTradingGoodsNums参数信息
        paramMap.put("goodsBelong", studentId);




        //保存此账号下闲置的所有物品信息
        List<Trade> idleList = null;

        //保存此账号下租赁的所有物品信息
        List<Trade> leaseList = null;

        //保存此账号下赠送的所有物品信息
        List<Trade> giveList = null;

        //保存此账号下寻求的所有物品信息，我的寻求
        List<Trade> seekList = null;

        //获取正在交易中的商品数量
        int goodsNumbers = 0;



        switch (type) {

            case 1:
                //设置商品为正在交易中的闲置商品
                parameterMap.put("goodsState", 1);
                paramMap.put("goodsState", 1);

                //获取此账号下闲置的所有物品信息
                idleList = tradeService.myTradeGoods(parameterMap);

                //获取此账号下的闲置商品的全部数量
                goodsNumbers = tradeService.myTradingGoodsNums(paramMap);
                break;

            case 2:
                //设置商品为正在交易中的租赁商品
                parameterMap.put("goodsState", 2);
                paramMap.put("goodsState", 2);

                //获取此账号下租赁的所有物品信息
                leaseList = tradeService.myTradeGoods(parameterMap);

                //获取此账号下的租赁商品的全部数量
                goodsNumbers = tradeService.myTradingGoodsNums(paramMap);
                break;


            case 3:
                //设置商品为正在交易中的寻求商品
                parameterMap.put("goodsState", 3);
                paramMap.put("goodsState", 3);

                //获取此账号下寻求的所有物品信息
                seekList = tradeService.myTradeGoods(parameterMap);

                //获取此账号下的寻求商品的全部数量
                goodsNumbers = tradeService.myTradingGoodsNums(paramMap);
                break;


            case 4:
                //设置商品为正在交易中的赠送商品
                parameterMap.put("goodsState", 4);
                paramMap.put("goodsState", 4);

                //获取此账号下赠送的所有物品信息
                giveList = tradeService.myTradeGoods(parameterMap);

                //获取此账号下的赠送商品的全部数量
                goodsNumbers = tradeService.myTradingGoodsNums(paramMap);
                break;
        }


        //获取总页数
        int allPage = (goodsNumbers / 8) + 1;

        tradeGoods.put("allPage",allPage);
        tradeGoods.put("giveList", giveList);
        tradeGoods.put("leaseList", leaseList);
        tradeGoods.put("idleList", idleList);
        tradeGoods.put("seekList", seekList);

        return tradeGoods;
    }
}