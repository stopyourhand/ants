package com.ants.controller.commodity.sell;

import com.ants.constant.PageConsts;
import com.ants.entity.commodity.sell.SellGoods;
import com.ants.service.commodity.sell.SellGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 交易完成后(已经交易)相关的代码均在此控制器
 * @Author czd
 * @Date:created in 2019/10/11
 * @Version: V1.0
 *
 */
@Controller
@RequestMapping(value = "/ants/sellGoods")
public class SellGoodsController {


    @Autowired
    private SellGoodsService sellGoodsService;

    /**
     * 根据学生学号获取此学生账号下的所交易完成的商品，包括闲置，租赁和赠送
     * type 中 1代表我的闲置，2代表我的租赁，3代表我的赠送
     * 举例：当type为1（代表我的闲置），后端返回数据中我的闲置那一块存在数据，其他部分的数据为空
     * @param request
     * @param type
     * @param currentPage
     * @return
     */
    @RequestMapping(value = "/mySellGoods",method = RequestMethod.GET)
    @ResponseBody
    public Map<String, List<SellGoods>> mySellGoods(HttpServletRequest request,
                                                    @RequestParam(value = "type") int type,
                                                    @RequestParam(value = "currentPage") Integer currentPage
    ){
        //用来存放最后返回给前端的数据
        Map sellGoods = new HashMap<>();

        //设置map用来保存mySellGoods方法中的参数信息
        Map<String, Integer> parameterMap = new HashMap();

        //设置map用来保存mySellGoodsNums方法中的参数信息
        Map<String, Integer> paramMap = new HashMap();


        //获取学生的学号，即登录此账户的用户
        Integer studentId = (Integer)request.getSession().getAttribute("studentId");
        if (studentId == null){
            sellGoods.put("error","用户未登录!");
            return sellGoods;
        }
        //保存myTradeGoods参数信息
        parameterMap.put("goodsBelong", studentId);

        if (currentPage < 1){
            sellGoods.put("error","页面数传输错误!");
            return sellGoods;
        }

        if (type < 1){
            sellGoods.put("error","信息类型传输错误!");
            return sellGoods;
        }

        //获取当前页数对应的数据库limit的head的值，以便获取对应数据库的限制输出的数据
        int head = (currentPage - 1) * 8;

        //获取当前页数对应的数据库limit的tail的值，以便获取对应数据库的限制输出的数据
//        int tail = head + 8;

//
//        //保存myTradingGoodsNums参数信息
//        paramMap.put("goodsBelong", studentId);

        //设置数据库SQL语句中Limit关键字中的参数信息
        parameterMap.put("head", head);
        parameterMap.put("tail", PageConsts.COMMODITY_PAGE_NUMBER);





        //保存此账号下闲置的所有物品信息
        List<SellGoods> idleList = null;

        //保存此账号下租赁的所有物品信息
        List<SellGoods> leaseList = null;

        //保存此账号下赠送的所有物品信息
        List<SellGoods> seekList = null;

        //保存此账号下赠送的所有物品信息
        List<SellGoods> giveList = null;


        //获取正在交易中的商品数量
        int goodsNumbers = 0;



        switch (type) {

            case 1:
                //设置商品为已经完成交易的闲置商品
                parameterMap.put("goodsState", 1);
                paramMap.put("goodsState", 1);

                //获取此账号下闲置的所有物品信息
                idleList = sellGoodsService.listMySellGoods(parameterMap);

                //获取此账号下的闲置商品的全部数量
                goodsNumbers = sellGoodsService.countMySellGoodsNums(paramMap);
                break;
            case 2:
                //设置商品为已经完成交易的租赁商品
                parameterMap.put("goodsState", 2);
                paramMap.put("goodsState", 2);

                //获取此账号下赠送的所有物品信息
                leaseList = sellGoodsService.listMySellGoods(parameterMap);

                //获取此账号下的赠送商品的全部数量
                goodsNumbers = sellGoodsService.countMySellGoodsNums(paramMap);
                break;

            case 3:
                //设置商品为已经完成交易的寻求商品
                parameterMap.put("goodsState", 3);
                paramMap.put("goodsState", 3);

                //获取此账号下租赁的所有物品信息
                seekList = sellGoodsService.listMySellGoods(parameterMap);

                //获取此账号下的租赁商品的全部数量
                goodsNumbers = sellGoodsService.countMySellGoodsNums(paramMap);
                break;


            case 4:
                //设置商品为已经完成交易的赠送商品
                parameterMap.put("goodsState", 4);
                paramMap.put("goodsState", 4);

                //获取此账号下赠送的所有物品信息
                giveList = sellGoodsService.listMySellGoods(parameterMap);

                //获取此账号下的赠送商品的全部数量
                goodsNumbers = sellGoodsService.countMySellGoodsNums(paramMap);
                break;

        }


        //获取总页数
        int allPage = (goodsNumbers / PageConsts.COMMODITY_PAGE_NUMBER) + 1;

        sellGoods.put("allPage",allPage);
        sellGoods.put("idleList", idleList);
        sellGoods.put("leaseList", leaseList);
        sellGoods.put("seekList", seekList);
        sellGoods.put("giveList", giveList);



        return sellGoods;
    }
}
