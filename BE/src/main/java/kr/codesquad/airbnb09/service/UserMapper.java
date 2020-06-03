package kr.codesquad.airbnb09.service;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    @Insert("INSERT INTO user(id, name, email) VALUE (#{id}, #{name}, #{email}) " +
            "ON DUPLICATE KEY UPDATE name=#{name}, email=#{email}")
    void insertUser(@Param("id") Long id, @Param("name") String name, @Param("email") String email);
}
