-- Практическая работа: создание базы данных «Автосервис»
-- СУБД: MySQL / MariaDB (phpMyAdmin)

CREATE DATABASE IF NOT EXISTS avtoservice
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE avtoservice;

-- При повторном запуске удаляем старые таблицы в правильном порядке
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS masters;
DROP TABLE IF EXISTS clients;

-- 1. Таблица клиентов
CREATE TABLE clients (
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    surname VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    phone VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Таблица автомобилей
CREATE TABLE cars (
    car_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    registration_number VARCHAR(20) NOT NULL UNIQUE,
    vin CHAR(17) NOT NULL UNIQUE,
    production_year YEAR NOT NULL,
    CONSTRAINT fk_cars_clients
        FOREIGN KEY (client_id) REFERENCES clients(client_id)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Таблица мастеров-приёмщиков
CREATE TABLE masters (
    master_id INT AUTO_INCREMENT PRIMARY KEY,
    surname VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    rank_number TINYINT UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Таблица заказ-нарядов
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    master_id INT NOT NULL,
    order_date DATE NOT NULL,
    completion_date DATE,
    work_description TEXT NOT NULL,
    status VARCHAR(30) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_orders_cars
        FOREIGN KEY (car_id) REFERENCES cars(car_id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_orders_masters
        FOREIGN KEY (master_id) REFERENCES masters(master_id)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Заполнение таблицы клиентов (10 записей)
INSERT INTO clients (surname, first_name, middle_name, phone) VALUES
('Иванов', 'Алексей', 'Сергеевич', '+7-900-111-11-01'),
('Петрова', 'Мария', 'Андреевна', '+7-900-111-11-02'),
('Сидоров', 'Дмитрий', 'Олегович', '+7-900-111-11-03'),
('Кузнецова', 'Анна', 'Игоревна', '+7-900-111-11-04'),
('Смирнов', 'Павел', 'Викторович', '+7-900-111-11-05'),
('Попова', 'Елена', 'Дмитриевна', '+7-900-111-11-06'),
('Васильев', 'Илья', 'Романович', '+7-900-111-11-07'),
('Морозова', 'Ольга', 'Павловна', '+7-900-111-11-08'),
('Новиков', 'Артём', 'Максимович', '+7-900-111-11-09'),
('Фёдорова', 'Ирина', 'Алексеевна', '+7-900-111-11-10');

-- Заполнение таблицы автомобилей (10 записей)
INSERT INTO cars
(client_id, brand, model, registration_number, vin, production_year) VALUES
(1, 'Kia', 'Rio', 'АВ123АВ39', 'XWEDE411BB0000001', 2018),
(2, 'Hyundai', 'Solaris', 'КС456КС39', 'Z94CT41DBKR000002', 2019),
(3, 'Toyota', 'Corolla', 'МР789МР39', 'JTDBR32E720000003', 2014),
(4, 'Kia', 'Sportage', 'АВ321АВ39', 'XWEPC81ABK0000004', 2020),
(5, 'Volkswagen', 'Polo', 'НТ654НТ39', 'WVWZZZ6RZGY000005', 2016),
(6, 'Hyundai', 'Creta', 'РК987РК39', 'Z94G2813BLR000006', 2021),
(7, 'Lada', 'Vesta', 'АВ555АВ39', 'XTAGFL110LY000007', 2020),
(8, 'Kia', 'Ceed', 'ОС147ОС39', 'U5YH2512AHL000008', 2017),
(9, 'Renault', 'Logan', 'ТМ258ТМ39', 'X7L4SRAV4HY000009', 2017),
(10, 'Hyundai', 'Tucson', 'АВ963АВ39', 'TMAJ3812AKJ000010', 2019);

-- Заполнение таблицы мастеров-приёмщиков (10 записей)
INSERT INTO masters (surname, first_name, middle_name, rank_number) VALUES
('Алексеев', 'Игорь', 'Петрович', 4),
('Борисов', 'Максим', 'Сергеевич', 5),
('Волков', 'Андрей', 'Иванович', 3),
('Григорьев', 'Николай', 'Олегович', 4),
('Дмитриев', 'Роман', 'Алексеевич', 5),
('Егоров', 'Станислав', 'Викторович', 3),
('Жуков', 'Павел', 'Дмитриевич', 4),
('Зайцев', 'Михаил', 'Романович', 5),
('Крылов', 'Денис', 'Игоревич', 2),
('Лебедев', 'Артём', 'Максимович', 4);

-- Заполнение таблицы заказ-нарядов (10 записей)
INSERT INTO orders
(car_id, master_id, order_date, completion_date, work_description, status, total_amount) VALUES
(1, 1, '2026-01-10', '2026-01-11', 'Замена моторного масла и масляного фильтра', 'Выполнен', 6500.00),
(2, 2, '2026-01-12', '2026-01-14', 'Диагностика двигателя и замена свечей зажигания', 'Выполнен', 12500.00),
(3, 3, '2026-01-15', NULL, 'Проверка ходовой части и диагностика подвески', 'В работе', 4500.00),
(4, 4, '2026-02-01', '2026-02-03', 'Замена передних тормозных колодок и дисков', 'Выполнен', 23800.00),
(5, 5, '2026-02-05', '2026-02-06', 'Замена аккумулятора и проверка генератора', 'Выполнен', 18000.00),
(6, 6, '2026-02-08', NULL, 'Компьютерная диагностика электронных систем автомобиля', 'В работе', 7000.00),
(7, 7, '2026-02-10', '2026-02-12', 'Ремонт системы охлаждения и замена термостата', 'Выполнен', 21500.00),
(8, 8, '2026-02-14', '2026-02-15', 'Замена воздушного фильтра и обслуживание тормозной системы', 'Выполнен', 9500.00),
(9, 9, '2026-02-18', NULL, 'Осмотр автомобиля перед дальней поездкой и проверка узлов', 'Ожидает', 3000.00),
(10, 10, '2026-02-20', '2026-02-22', 'Замена ремня привода и роликов вспомогательного оборудования', 'Выполнен', 25000.00);

-- ЗАПРОСЫ ПО ЗАДАНИЮ

-- 1. Вывести всех мастеров-приёмщиков, отсортировав по фамилии
SELECT *
FROM masters
ORDER BY surname ASC;

-- 2. Вывести автомобили Kia или Hyundai, выпущенные после 2015 года
SELECT *
FROM cars
WHERE brand IN ('Kia', 'Hyundai')
  AND production_year > 2015;

-- 3. Вывести заказ-наряды на сумму от 5 000 до 25 000 рублей
SELECT *
FROM orders
WHERE total_amount BETWEEN 5000 AND 25000;

-- 4. Вывести Фамилию, инициалы и телефон клиента одной строкой
SELECT CONCAT(
           surname, ' ',
           LEFT(first_name, 1), '.',
           LEFT(middle_name, 1), '. — ',
           phone
       ) AS client_contact
FROM clients;

-- 5. Найти автомобили, в госномере которых присутствует сочетание «АВ»
SELECT *
FROM cars
WHERE registration_number LIKE '%АВ%';

-- 6. Вывести заказ-наряды, описание работ в которых длиннее 30 символов
SELECT *
FROM orders
WHERE LENGTH(work_description) > 30;
