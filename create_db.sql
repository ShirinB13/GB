# Make sure the database is created before you run this script
CREATE DATABASE goldbubble;

# Select the database
USE goldbubble;

# Create the user which the web app will use to access the database
DROP USER IF EXISTS 'goldbubbleapp'@'localhost';
CREATE USER 'goldbubbleapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwerty';
GRANT ALL PRIVILEGES ON goldbubble.* TO 'goldbubbleapp'@'localhost';      

# Remove the tables if they already exist
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS topics;

CREATE TABLE users (
  firstname VARCHAR(20) NOT NULL,
  surname VARCHAR(20) NOT NULL,
  username VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(100),
  psw VARCHAR(100),
  PRIMARY KEY(username)
);


# Create the topics table to store the list of available topics
CREATE TABLE topics (
   topic_title VARCHAR(50),
   PRIMARY KEY(topic_title)
);

# Create the posts table to store the user posts
CREATE TABLE posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    post_date DATETIME,
    post_title VARCHAR(100),
    post_content VARCHAR(2000),
    username VARCHAR(15),
    topic_title VARCHAR(50),
    FOREIGN KEY (username) REFERENCES users(username),
    FOREIGN KEY (topic_title) REFERENCES topics(topic_title)
);


