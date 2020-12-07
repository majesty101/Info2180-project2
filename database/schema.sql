DROP DATABASE IF EXISTS proposals;
CREATE DATABASE proposals;
USE proposals;
/* Creating the users table*/
CREATE TABLE `users`(
    `id` int(5) NOT NULL auto_increment,
    `firstname` varchar(20) NOT NULL default '',
    `lastname` varchar(20) NOT NULL default '',
    `password` varchar(80) NOT NULL default '',
    `email` varchar(20) NOT NULL default '',
    `date_joined` DATETIME NOT NULL default current_timestamp,
    PRIMARY KEY (`id`)
)ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `users` WRITE;
INSERT INTO `users` (firstname,lastname,password,email)VALUES ('Jody','Harrison','$2y$10$qEg04tOZIDOZV1MVaPajHuaa7F3YqsIPRaKsT1z3VM0NsMnmR/Gi6','admin@project2.com');
UNLOCK TABLES;


/* Creating the isssues table*/
CREATE TABLE `issues`(
    `id` int(5) NOT NULL auto_increment,
    `title` varchar(50) NOT NULL default '',
    `description` text(100) NOT NULL default '',
    `type` varchar(15) NOT NULL default '',
    `priority` varchar(20) NOT NULL default '',
    `status` varchar(20) NOT NULL default 'Open',
    `assigned_to` int(5) NOT NULL default 0,
    `created_by` int(5) NOT NULL default 0,
    `created` DATETIME NOT NULL default  current_timestamp,
    `updated` DATETIME NOT NULL default  current_timestamp on update current_timestamp,

    PRIMARY KEY (`id`)
)ENGINE=MyISAM AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;
    

