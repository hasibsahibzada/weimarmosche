-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Oct 24, 2016 at 12:03 PM
-- Server version: 5.5.42
-- PHP Version: 5.5.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `weimar_mosche`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `u_id` int(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`u_id`, `username`, `password`, `name`) VALUES
(2, 'hasib', '1234', 'Hasibullah ');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(20) NOT NULL,
  `cat_name` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`) VALUES
(2, 'Events'),
(3, 'Hadith'),
(1, 'News'),
(4, 'Quran');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `c_id` int(10) NOT NULL,
  `Author` varchar(20) NOT NULL,
  `Date` date NOT NULL,
  `post_id` int(10) NOT NULL,
  `comment_text` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `p_id` int(10) NOT NULL,
  `p_name` varchar(200) NOT NULL,
  `p_body` longtext NOT NULL,
  `p_image` varchar(200) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`p_id`, `p_name`, `p_body`, `p_image`, `cat_id`, `date`) VALUES
(1, 'Weimar gatherings', 'Today weimar is facing an important gathering in the history of weimar.\r\nmosche is coming together to meet everyone. ', 's2.jpg', 2, '0000-00-00 00:00:00'),
(2, 'Hasib new event', 'Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy Hello I am very happy \r\nHello I am very happy \r\nHello I am very happy where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you where are you\r\n where are you where are you where are you where are you\r\n ', 's1.jpg', 1, '0000-00-00 00:00:00'),
(3, 'Where are you', 'a;lskdfj;aljsf \r\na;lskdfj;aljsf \r\na;lskdfj;aljsf \r\na;lskdfj;aljsf dfasdfasd asdfasdf\r\nasdfasfadf\r\na;lskdfj;aljsf \r\na;lskdfj;aljsf \r\n', 's3.jpg', 3, '0000-00-00 00:00:00'),
(4, 'asdfasd', 'asdfa \r\nasdkfjalfja ;fa\r\nasd;fja;lfja;lfjasl;djfl;adfjkl;ajdf;lajf;lkajdf\r\naklsfdj;alsdfkj;asdjf', 's4.jpg', 1, '0000-00-00 00:00:00'),
(5, 'Pranoye Post', 'SDFKFJLKASDJ F\r\nAFDJKAJKLFJ SFKLJSDF\r\nSFKSJ LFKJSD', 's2.jpg', 2, '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`u_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`),
  ADD UNIQUE KEY `cat_name` (`cat_name`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`p_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `u_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `c_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `p_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;