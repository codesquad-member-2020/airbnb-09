SET foreign_key_checks = 0; # 외래키를 무시하고 지울 수 있도록 외래키 체크 설정을 off
-- -----------------------------------------------------
-- Schema airbnb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `airbnb` DEFAULT CHARACTER SET utf8;
USE `airbnb`;

-- -----------------------------------------------------
-- Table `airbnb`.`listing`
-- -----------------------------------------------------
# DROP TABLE IF EXISTS `airbnb`.`listing`;

CREATE TABLE IF NOT EXISTS `airbnb`.`listing`
(
    `id`             BIGINT      NOT NULL AUTO_INCREMENT,
    `title`          VARCHAR(64) NULL,
    `price`          INT         NULL DEFAULT 0,
    `discount_price` INT         NULL,
    `cleaning_fee`   INT         NULL DEFAULT 0,
    `service_fee`    INT         NULL DEFAULT 0,
    `country`        VARCHAR(64) NULL,
    `rating`         DOUBLE      NULL DEFAULT 3.0 COMMENT '평점0~5',
    `is_superhost`   BOOLEAN     NULL DEFAULT FALSE COMMENT '슈퍼호스트 여부',
    `accommodates`   INT         NULL COMMENT '수용인원',
    `latitude`       DOUBLE      NULL COMMENT '위도',
    `longitude`      DOUBLE      NULL COMMENT '경도',
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airbnb`.`image`
-- -----------------------------------------------------
# DROP TABLE IF EXISTS `airbnb`.`image`;

CREATE TABLE IF NOT EXISTS `airbnb`.`image`
(
    `id`         BIGINT      NOT NULL AUTO_INCREMENT,
    `url`        VARCHAR(1024) NULL COMMENT '이미지 url',
    `listing_id` BIGINT      NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`listing_id`) REFERENCES listing (id)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airbnb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airbnb`.`user`;

CREATE TABLE IF NOT EXISTS `airbnb`.`user`
(
    `id`   BIGINT      NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NULL COMMENT 'github userId',
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airbnb`.`booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airbnb`.`booking`;

CREATE TABLE IF NOT EXISTS `airbnb`.`booking`
(
    `id`          BIGINT   NOT NULL AUTO_INCREMENT,
    `checkin`     DATETIME NULL,
    `checkout`    DATETIME NULL,
    `adults`      INT      NULL,
    `children`    INT      NULL,
    `infants`     INT      NULL,
    `total_price` INT      NULL COMMENT '총 결제 금액',
    `user_id`     BIGINT   NOT NULL,
    `listing_id`  BIGINT   NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES user (id),
    FOREIGN KEY (`listing_id`) REFERENCES listing (id)
)
    ENGINE = InnoDB;

