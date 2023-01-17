-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2023 at 11:17 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codebox`
--

-- --------------------------------------------------------

--
-- Table structure for table `card_content`
--

CREATE TABLE `card_content` (
  `cardId` varchar(255) NOT NULL,
  `cardTitle` varchar(255) DEFAULT NULL,
  `cardText` longtext DEFAULT NULL,
  `cardDescription` text DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `lang` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `card_content`
--

INSERT INTO `card_content` (`cardId`, `cardTitle`, `cardText`, `cardDescription`, `userId`, `lang`) VALUES
('703658f-6388-dfd-1e2-8557dac5e', 'print in pyhon', 'print(\"this is how to display something in python\") ', 'this card is about how to print in python', '7feda43-83d7-ddf-ce4e-bbc7f448d7c4', 'py'),
('86a7b4-175d-16b4-e6d-8ff6aabf422', 'comment in python', '#this is a comment in python', 'this card is about comments in python', 'c6e7a6-6cad-30-117c-8f3de2f2fd8a', NULL),
('885ba67-5d5c-b1c5-2b5a-b565384ceab', 'import rrc', 'import {Link} from \'react-router-dom\';', 'this card is about importing react router dom', 'c6e7a6-6cad-30-117c-8f3de2f2fd8a', 'js'),
('ad2be7a-72d8-e878-edd0-c20bbf4eb2fb', 'function in python', 'def function ():\n  #write code here', 'this card is about defining a function in python', 'c6e7a6-6cad-30-117c-8f3de2f2fd8a', 'py'),
('b8aeb5c-2f6-3f71-f3dc-fac008c56e6e', 'reverse a linked list in C++', 'void reverse()\n    {\n        // Initialize current, previous and next pointers\n        Node* current = head;\n        Node *prev = NULL, *next = NULL;\n \n        while (current != NULL) {\n            // Store next\n            next = current->next;\n            // Reverse current node\'s pointer\n            current->next = prev;\n            // Move pointers one position ahead.\n            prev = current;\n            current = next;\n        }\n        head = prev;\n    }', 'this card is about reversing a linked list in C++', 'c6e7a6-6cad-30-117c-8f3de2f2fd8a', 'cpp'),
('e0e55d-3034-3014-5a12-11fd65844c5d', 'for loop in python', 'for (i in iterable):\n  #do somthing...', 'how to loop in python', '57aa40-8365-cbd8-615-564f4bd577d7', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` varchar(255) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `userPassword` varchar(255) DEFAULT NULL,
  `userEmail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `userName`, `userPassword`, `userEmail`) VALUES
('2bfc5e-f8ed-12a4-3aa7-1df65bea04', 'Mama', '123', 'mamamia@gmail.com'),
('57aa40-8365-cbd8-615-564f4bd577d7', 'user000', '1234', 'user000@gmail.com'),
('6eb6b8-1f0f-05b3-cf2c-b8862018b0c3', 'Hbib', 'pippip', 'hbibgrami10@gmail.com'),
('7feda43-83d7-ddf-ce4e-bbc7f448d7c4', 'Sarra', 'sarrarara', 'sarrainoubli1234@gmail.com'),
('c6e7a6-6cad-30-117c-8f3de2f2fd8a', 'Rayen', '1234', 'rayeninoubli29@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `card_content`
--
ALTER TABLE `card_content`
  ADD PRIMARY KEY (`cardId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userName` (`userName`),
  ADD UNIQUE KEY `userEmail` (`userEmail`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `card_content`
--
ALTER TABLE `card_content`
  ADD CONSTRAINT `card_content_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
