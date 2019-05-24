package com.ants.controller;
import com.ants.entity.Student;
import com.ants.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletRequest;
import javax.sql.rowset.serial.SerialStruct;
import java.util.HashMap;
import java.util.Map;

/**
 * @author czd
 * 登录和注销功能的Controller
 */
@Controller
@RequestMapping(value = "/ants/user")
public class SystemController {


    @RequestMapping(value = "/login",method=RequestMethod.POST)
    @ResponseBody
    public Map<String ,String> studentsLogin(Student student, String cpacha, HttpServletRequest request){
        Map<String ,String> ants = new HashMap<String,String>();
        if(student ==null){
            ants.put("type","false");
            ants.put("message","请填写用户名");
            return ants;
        }
        if(StringUtils.isEmpty(cpacha)){
            ants.put("type", "false");
            ants.put("message", "请填写验证码！");
            return ants;
        }
        if(StringUtils.isEmpty(student.getUserName())){
            ants.put("type", "error");
            ants.put("message", "请填写用户名！");
            return ants;
        }
        if(StringUtils.isEmpty(student.getPassWord())){
            ants.put("type", "error");
            ants.put("message", "请填写密码！");
            return ants;
        }
//        Object loginCpacha = request.getSession().getAttribute("loginCpacha");
        Object loginCpacha = "1234";
        if(loginCpacha == null){
            ants.put("type", "error");
            ants.put("message", "未获取到验证码，请重新刷新下界面");
            return ants;
        }
        try{
            System.out.println(student.getUnpw());
            System.out.println(com.ants.util.RequestLogin.askForLogin(student.getUnpw())+"!!!");
            if(com.ants.util.RequestLogin.askForLogin(student.getUnpw())!=302){
                ants.put("type","error");
                ants.put("message","该用户不存在");
                return ants;
            }
        }catch (Exception e){
            e.printStackTrace();
        }

        return ants;//登录成功
    }

    @Autowired
    private StudentService studentService;

    @RequestMapping(value = "/testStudent",method = RequestMethod.GET)
    @ResponseBody
    public Map<String,String> addStudent(){
        Student student = new Student();
        student.setStudentId(1);
        student.setUserName("user");
        student.setUserSex(0);
        student.setPassWord("123456");
        student.setMobilePhone("13106617928");
        student.setUserWechat("weiXing");
        student.setUserQQ("1783209601");
        student.setRegistTime("2019-06-06");
        student.setHidden(0);
        int result = studentService.add(student);
        System.out.println("result: " + result);
        Map<String,String> map = new HashMap<>();
        map.put("1","hello");
        return map;
    }

}
