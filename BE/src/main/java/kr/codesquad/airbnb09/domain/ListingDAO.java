package kr.codesquad.airbnb09.domain;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Component;

@Component
public class ListingDAO {
    private final SqlSession sqlSession;

    public ListingDAO(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public AccommodationDTO selectAccommodationById(long id) {
        return this.sqlSession.selectOne("selectAccommodationById", id);
    }
}
