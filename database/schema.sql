DROP DATABASE IF EXISTS proposals;
CREATE DATABASE proposals;
USE proposals;
/* Creating the users table*/
CREATE TABLE `users`(
    `id` int(5) NOT NULL auto_increment,
    `firstname` varchar(12) NOT NULL default '',
    `lastname` varchar(12) NOT NULL default '',
    `password` varchar(15) NOT NULL default '',
    `email` varchar(20) NOT NULL default '',
    `date_joined` DATETIME NOT NULL default '1900-01-01 00:00:00',
    PRIMARY KEY (`id`)
)ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;

/*Inserting relevant data into users table*/
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES
(0,'jody',"harrison",'password123','admin@project2.com',default);
UNLOCK TABLES;


/* Creating the isssues table*/
CREATE TABLE `issues`(
    `id` int(5) NOT NULL auto_increment,
    `title` varchar(12) NOT NULL default '',
    `discription` text NOT NULL default '',
    `type` varchar(15) NOT NULL default '',
    `priority` varchar(20) NOT NULL default '',
    `status` varchar(20) NOT NULL default '',
    `assigned_to` int(5) NOT NULL default 0,
    `created_by` int(5) NOT NULL default 0,
    `created` DATETIME NOT NULL default '1900-01-01 00:00:00',
    `updated` DATETIME NOT NULL default '1900-01-01 00:00:00',

    PRIMARY KEY (`id`)
)ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;
    

