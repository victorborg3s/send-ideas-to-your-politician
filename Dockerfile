FROM php:5.5.27-apache
RUN docker-php-ext-install pdo pdo_mysql
