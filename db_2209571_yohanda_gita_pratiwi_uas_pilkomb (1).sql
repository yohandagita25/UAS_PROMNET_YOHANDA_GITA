-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2024 at 09:37 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2209571_yohanda_gita_pratiwi_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `peminjamanbuku`
--

CREATE TABLE `peminjamanbuku` (
  `id` int(11) NOT NULL,
  `judul_buku` varchar(100) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `nama_peminjam` varchar(100) NOT NULL,
  `alamat_peminjam` varchar(100) NOT NULL,
  `noHp_peminjam` varchar(20) NOT NULL,
  `tgl_pinjam` date NOT NULL,
  `tgl_pengembalian` date NOT NULL,
  `lama_pinjam` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjamanbuku`
--

INSERT INTO `peminjamanbuku` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tgl_pinjam`, `tgl_pengembalian`, `lama_pinjam`) VALUES
(2, 'Cintaku antara Jakarta & Kuala Lumpur', 10, 'Zaki', 'Magetan', '96321', '2023-11-30', '2023-12-05', '5 hari'),
(3, 'The Gogons James & the Incredible Incident', 18, 'Keenan', 'Magetan', '085993', '2023-11-18', '2023-11-25', '7 hari'),
(4, 'The Gogons 2 : Dito & Prison of Love', 11, 'Ridzky', 'Bandung', '085123', '2023-07-11', '2023-11-25', '7 hari'),
(5, 'Hafalan Shalat Delisa', 9, 'Mimi', 'Madiun', '085456', '2023-09-10', '2023-09-20', '10 hari'),
(6, 'Moga Bunda Disayang Allah', 23, 'Yohanda', 'Malang', '085789', '2023-09-25', '2023-10-11', '12 hari'),
(7, 'Bidadari - Bidadari Surga , Dia adalah Kakakku', 8, 'Iky', 'Sumedang', '085656', '2023-07-11', '2023-07-30', '19 hari'),
(8, 'Senja Bersama Rosie, Sunset Bersama Rosie, Sunset dan Rosie', 20, 'Aretha', 'Madiun', '085250', '2023-11-03', '2023-11-25', '22 hari'),
(9, 'Burlian, Si Anak Spesial', 17, 'Mila', 'Ngawi', '085903', '2023-12-17', '2023-12-31', '14 hari'),
(11, ' si Patah Hati', 1, 'tiwi', 'cicahem', '1774', '2023-12-14', '2023-12-20', '6 hari'),
(12, 'Hujan', 8, 'Arsyila', 'Jakarta', '098765', '2024-01-01', '2024-01-05', '5 Hari'),
(13, 'tere liye', 10, 'titi', 'bekasi', '852369', '2024-01-11', '2024-01-13', '2 hari');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peminjamanbuku`
--
ALTER TABLE `peminjamanbuku`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjamanbuku`
--
ALTER TABLE `peminjamanbuku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
