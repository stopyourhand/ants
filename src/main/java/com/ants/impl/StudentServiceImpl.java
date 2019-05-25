package com.ants.impl;

import com.ants.dao.StudentDao;
import com.ants.entity.Student;
import com.ants.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author czd
 */
@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentDao studentDao;

    /**
     * 添加新用户的接口实现方法
     *
     * @param student
     * @return
     */
    @Override
    public int add(Student student) {
        return studentDao.add(student);
    }
}
