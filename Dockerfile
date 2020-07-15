FROM php:7.3.20-apache
RUN docker-php-ext-install pdo pdo_mysql
