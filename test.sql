/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50744
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50744
 File Encoding         : 65001

 Date: 14/09/2024 17:27:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tuser
-- ----------------------------
DROP TABLE IF EXISTS `tuser`;
CREATE TABLE `tuser`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名，唯一',
  `password` char(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `user_name`(`user_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tuser
-- ----------------------------
INSERT INTO `tuser` VALUES (1, '976258825', '555', '2024-09-14 07:03:35', '2024-09-14 07:03:35');
INSERT INTO `tuser` VALUES (3, '97625882335', '555', '2024-09-14 07:05:53', '2024-09-14 07:05:53');
INSERT INTO `tuser` VALUES (5, '3334', '555', '2024-09-14 07:07:04', '2024-09-14 07:07:04');
INSERT INTO `tuser` VALUES (7, '33ss34', '555', '2024-09-14 07:09:51', '2024-09-14 07:09:51');
INSERT INTO `tuser` VALUES (8, '323ss34', '555', '2024-09-14 08:36:08', '2024-09-14 08:36:08');
INSERT INTO `tuser` VALUES (9, '3ss3ss34', '555', '2024-09-14 08:41:01', '2024-09-14 08:41:01');
INSERT INTO `tuser` VALUES (10, '3ss3sssss34', '555', '2024-09-14 08:41:15', '2024-09-14 08:41:15');
INSERT INTO `tuser` VALUES (11, '3ss3ssss7s34', '555', '2024-09-14 08:42:36', '2024-09-14 08:42:36');
INSERT INTO `tuser` VALUES (12, '3ss223ssss7s34', '555', '2024-09-14 08:45:59', '2024-09-14 08:45:59');
INSERT INTO `tuser` VALUES (13, '3ss2233ssss7s34', '555', '2024-09-14 08:46:52', '2024-09-14 08:46:52');
INSERT INTO `tuser` VALUES (14, '3ss2333233ssss7s34', '555', '2024-09-14 08:48:36', '2024-09-14 08:48:36');
INSERT INTO `tuser` VALUES (15, '3ss2333233sssws7s34', '555', '2024-09-14 08:49:59', '2024-09-14 08:49:59');
INSERT INTO `tuser` VALUES (16, '3ss23387883233sssws7s34', '555', '2024-09-14 08:55:11', '2024-09-14 08:55:11');
INSERT INTO `tuser` VALUES (17, 'eefvgg', '$2a$10$6vK8OizKrBEglXCKo492jOPutR7Jhs0Dx8hupgE.GKDxwelHGqgu6', '2024-09-14 09:11:07', '2024-09-14 09:11:07');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '',
  `mobile` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '曹操', '', '125458455', '2024-09-11 14:05:43', '2024-09-11 14:05:45');
INSERT INTO `user` VALUES (4, '周瑜', '', '110000', NULL, NULL);
INSERT INTO `user` VALUES (5, '5564', '', '45222223', '2024-09-11 15:09:00', '2024-09-13 14:09:30');

SET FOREIGN_KEY_CHECKS = 1;
