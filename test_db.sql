# Create the test database
CREATE DATABASE test_goldbubble;

# Select the test database
USE test_goldbubble;

# Create the user which the web app will use to access the database
DROP USER IF EXISTS 'test_goldbubbleapp'@'localhost';
CREATE USER 'test_goldbubbleapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwerty';
GRANT ALL PRIVILEGES ON test_goldbubble.* TO 'test_goldbubbleapp'@'localhost';      

# Remove the tables if they already exist
DROP TABLE IF EXISTS test_posts;
DROP TABLE IF EXISTS test_users;
DROP TABLE IF EXISTS test_topics;

# Create the users table to store the user data
CREATE TABLE test_users (
  firstname VARCHAR(20) NOT NULL,
  surname VARCHAR(20) NOT NULL,
  username VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(100),
  psw VARCHAR(100),
  PRIMARY KEY(username)
);

# Create the topics table to store the list of available topics
CREATE TABLE test_topics (
   topic_title VARCHAR(50),
   PRIMARY KEY(topic_title)
);

# Create the posts table to store the user posts
CREATE TABLE test_posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    post_date DATETIME,
    post_title VARCHAR(100),
    post_content VARCHAR(2000),
    username VARCHAR(15),
    topic_title VARCHAR(50),
    FOREIGN KEY (username) REFERENCES test_users(username),
    FOREIGN KEY (topic_title) REFERENCES test_topics(topic_title)
);
