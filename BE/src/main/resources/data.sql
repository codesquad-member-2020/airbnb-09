-- user 데이터 추가
INSERT INTO user(id, name, email) VALUE (1111, 'hahaha', 'hahaha@gmail.com');
INSERT INTO user(id, name, email) VALUE (2222, 'lalala', 'lalala@codesquad.com');

-- booking 데이터 추가
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-10', '2020-05-11', 1, 0, 1, 81767, 1, 1);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-10', '2020-05-12', 1, 0, 1, 81767, 1, 2);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-10', '2020-05-16', 1, 0, 1, 81767, 1, 3);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-11', '2020-05-12', 1, 0, 1, 81767, 1, 4);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-11', '2020-05-15', 1, 0, 1, 81767, 1, 5);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-12', '2020-05-13', 1, 0, 1, 81767, 1, 6);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-14', '2020-05-15', 1, 0, 1, 81767, 1, 7);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-14', '2020-05-16', 1, 0, 1, 81767, 1, 8);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-15', '2020-05-16', 1, 0, 1, 81767, 1, 9);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-01', '2020-05-02', 1, 0, 1, 81767, 1, 10);
INSERT INTO booking ( checkin, checkout, adults, children, infants, total_price, user_id
                    , listing_id) VALUE ('2020-05-30', '2020-05-31', 1, 0, 1, 81767, 1, 11);
