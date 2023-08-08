-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 08 2023 г., 17:57
-- Версия сервера: 8.0.29
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `php_shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `goods`
--

CREATE TABLE `goods` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `description` text,
  `price` varchar(255) NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `goods`
--

INSERT INTO `goods` (`id`, `title`, `description`, `price`, `image`) VALUES
(194, 'Ноутбук DEXP Aquilon серебристый', 'Full HD (1920x1080), IPS, Intel Celeron N4020, ядра: 2 х 1.1 ГГц, RAM 4 ГБ, SSD 128 ГБ, Intel UHD Graphics 600 , Windows 11 Pro', '16199', 'uploads/file-1689968828492.jpeg'),
(195, 'Ноутбук Chuwi HeroBook Pro серебристый', 'Full HD (1920x1080), IPS, Intel Celeron N4020, ядра: 2 х 1.1 ГГц, RAM 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 600 , Windows 10 Home', '20999', 'uploads/file-1689968887834.jpeg'),
(196, 'Ноутбук ASUS Laptop 15 D543MA-DM1368 черный', 'Full HD (1920x1080), TN+film, Intel Celeron N4020, ядра: 2 х 1.1 ГГц, RAM 4 ГБ, HDD 1000 ГБ, Intel UHD Graphics , без ОС', '25299', 'uploads/file-1689968942177.jpeg'),
(197, 'Ноутбук Echips Envy серебристый', 'Full HD (1920x1080), IPS, Intel Celeron J4125, ядра: 4 х 2 ГГц, RAM 8 ГБ, SSD 240 ГБ, Intel UHD Graphics 600 , Windows 10 Pro', '28999', 'uploads/file-1689968996123.jpeg'),
(198, 'Ноутбук Infinix InBook X2 PLUS XL25 синий', 'Full HD (1920x1080), IPS, Intel Core i3-1115G4, ядра: 2 х 3 ГГц, RAM 8 ГБ, SSD 256 ГБ, Intel UHD Graphics , Windows 11 Home', '34999', 'uploads/file-1689969063483.jpeg'),
(199, 'Ноутбук Lenovo IdeaPad V15 Gen 3 IAP черный', 'Full HD (1920x1080), TN+film, Intel Core i3-1215U, ядра: 2 + 4 х 1.2 ГГц, RAM 8 ГБ, SSD 256 ГБ, Intel UHD Graphics , без ОС', '36799', 'uploads/file-1689969213444.jpeg');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `login`, `password`, `role`) VALUES
(1, 'sitesmaker@mail.ru', 'yura_fil', '$2y$10$ikFwTcnEki9QcGrRLam2Zemf8kSqXadnYUudBDJ6AmAaXRvtJ1qNW', 'user'),
(10, 'test@mail.ru', 'mari_321', '$2y$10$zYNIvgS6nCCMhUv8lC8Zo.qPWcxXKD5n/QYg.2CCX7iQE4.bE8HSG', 'user'),
(11, 'sitesmaker@mail.ru', 'yura3354', '$2y$10$WVeiOpaK3hpq0ygHqiIUDeJfTy8dViXKPa6nl6JbCImNx7jJi0M.m', 'user'),
(12, 'moroc30499@inkmoto.com', 'test', '$2y$10$VIPkqdLsPQClQ91tG/wQMOdSH2kjh4Q38mNhwceJH7nQ0mCq5HS2C', 'user'),
(13, 'sitesmaker@mail.ru', 'test1', '$2y$10$igdcaZ8z3Ilbl9xx1srmZeTb1mmi0OAQOHp5kVdT7qz.TTratw/u6', 'admin'),
(14, 'test@mail.ru', 'test2', '$2y$10$c5FICRG8rKNNrXB2PlZRyewZqr9qEeu29lEgxMvb6R2/HPmmJnPba', 'user'),
(18, NULL, 's2', '$2a$07$qoN1tOU84TL21bWJ5WmjueepYNm5m5qr/lMsdMuwiz0oxAjbhhgYK', 'user'),
(19, NULL, 's11', '$2a$07$8Dug3/pmMSJEqT3xJMyq/.SvBCCU2kWOEhCBGtFZZ.raXXJ9YLekm', 'user'),
(20, NULL, 'yura', '$2a$07$vqvK3.sGVLiahpk4uMYxHuCPDiQ7cw8jqviTyysxBoXt5CXEwZ6t6', 'admin'),
(21, 'test@mail.ru', 'yuraTest', '$2y$10$VbEOrjSU4gytxczDKLn9v.Op9Hp4SQDcrC9hwEz0RT0hrVHQoGSM2', 'user'),
(22, 'test@mail.ru', 'yura1111', '$2y$10$29FC6h4nX3aAiLmZPTUPhOzn2gH.2Hmu8oN.Hlim.5SCp8PR9Ashq', 'user'),
(23, 'test@mail.ru', 'test12', '$2y$10$FEyu0dLBXBO5juhGu928f.tYIdDB58xP/nMXa60qNQ2Y0eIrwYYCu', 'user'),
(24, 'test@mail.ru', '1111', '$2y$10$cZ8KjbyjFNxqT8hxHNwF5u1vigE2wRpYA/jIgLO6SzkCOG3NUkYMK', 'user'),
(25, 'test@mail.ru', '12', '$2y$10$pVcIrtf/19HO8IUwStMnWu7DWSCWm2jPEYFVJ6m/QXSGTuPSdbjZa', 'user'),
(26, 'sadasd', 'saddas', '$2y$10$B4V2rfhQefX40eOtjaF3F.AlNPPt4Dx/45Oki7LZhBW.pDD4pHqda', 'user'),
(27, 'sitesmaker@mail.ru', '11114', '$2y$10$SH96kJ.PNsJzlozQDttr9erD7.wt0bmP.UkkBJQHwar2sGXjghegq', 'user'),
(28, 'sitesmaker@mail.ru', '12312', '$2y$10$ET3BB8nLdV6BvMceJX52i.Lu/5yEo/V3m/1sz.JtR0W87rOXf6s0y', 'user'),
(29, 'sitesmaker@mail.ru', '3113', '$2y$10$7qzao8BLAaSL20mFV2RJpOENnie73IHDSAdOMOPIbkG0vG28ki2mu', 'user'),
(30, 'asdsa', 'sadasd', '$2y$10$td1ga6g1enQ36lThkNo2VekL1JcyygX0ZFRQekOPp3UeT.hfHZT1q', 'user'),
(31, 'asdasd', 'adsasd', '$2y$10$mo2sJ7l5UstewcMIkTbLEejEu7JqJq2pOoHOA8DNCS8x2KUqR4mEO', 'user'),
(32, 'asdasd', 'asdasd', '$2y$10$cFBZ3X.0ei7Z2AzNtl4UB.1ibXxV3tXuoAN2mNPpIfpYZ5ZrJUZGu', 'user'),
(33, 'sitesmaker@mail.ru', 'asdasds', '$2y$10$/bY4Bti8EVVFFqxsbO/n9edm9JO/hVQ2WOHb/rFsHjLHiGz2cMena', 'user'),
(34, 'sitesmaker@mail.ru', '123123', '$2y$10$8U8NvEdRJBI4V.ZSIJz4petuGeQWZ.tLAdkugFBHSUgP9mXl/aP0W', 'user'),
(35, 'test@mail.ru', '1113', '$2y$10$SB3A5WqEK7w0AotsceXQ3uEygUr645j1lxBHC2Sy/8H1fjfC5sATG', 'user'),
(36, 'sitesmaker@mail.ru', 'yura33', '$2y$10$YTEa7Er1KWUx0HBIFzpo0umslbaXr1ni3cwd/rH/cr37NVUgO/Q3i', 'user'),
(37, 'lady@mari.ru', 'masha20', '$2y$10$0Xk5l1BECZ7tsMUf5k1IWeEiWuKYoJqUn62FeRVld8ex3n3lQlnNq', 'user'),
(38, 'test@mail.ru', '123', '$2y$10$3CHgoo0TTyYqDOnG5a2ZluP7nyn04MNbHw.dzEFBee4//bbyQc4Ru', 'user'),
(39, 'sitesmaker@mail.ru', 'test32', '$2y$10$wZsCNo9m1p4jZBnJNuvWIuZwxc/2eWfke9p436sktyOSX2ODc64D.', 'user');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
