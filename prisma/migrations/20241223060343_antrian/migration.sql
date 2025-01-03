-- CreateTable
CREATE TABLE `admin` (
    `id_admin` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_admin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `antrian_pmb` (
    `id_antrian` INTEGER NOT NULL AUTO_INCREMENT,
    `no_antrian` VARCHAR(191) NOT NULL,
    `tanggal_antrian` DATETIME(3) NOT NULL,
    `waktu_antrian` TIME NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id_antrian`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `antrian_student` (
    `id_antrian` INTEGER NOT NULL AUTO_INCREMENT,
    `no_antrian` VARCHAR(10) NOT NULL,
    `no_rfid` VARCHAR(80) NOT NULL,
    `id_jenispelayanan` INTEGER NOT NULL,
    `nama_pelayanan` VARCHAR(100) NOT NULL,
    `tanggal_antrian` DATETIME(3) NOT NULL,
    `waktu_antrian` TIME NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id_antrian`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mahasiswa` (
    `no_rfid` VARCHAR(80) NOT NULL,
    `nim` VARCHAR(10) NOT NULL,
    `nama` VARCHAR(80) NOT NULL,
    `prodi` VARCHAR(80) NOT NULL,

    UNIQUE INDEX `mahasiswa_nim_key`(`nim`),
    PRIMARY KEY (`no_rfid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loket` (
    `no_loket` INTEGER NOT NULL,
    `id_jenispelayanan` INTEGER NOT NULL,
    `keterangan` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`no_loket`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jenis_pelayanan` (
    `id_jenispelayanan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pelayanan` VARCHAR(100) NOT NULL,
    `keterangan` TEXT NOT NULL,

    PRIMARY KEY (`id_jenispelayanan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `antrian_terlayani` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_jenispelayanan` INTEGER NOT NULL,
    `no_loket` INTEGER NOT NULL,
    `no_antrian` VARCHAR(10) NOT NULL,
    `no_rfid` VARCHAR(100) NOT NULL,
    `operator` INTEGER NOT NULL,
    `tanggal_pelayanan` DATETIME(3) NOT NULL,
    `waktu_pelayanan` TIME NOT NULL,
    `waktu_selesai_pelayanan` TIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operator` (
    `id_operator` INTEGER NOT NULL AUTO_INCREMENT,
    `no_loket` INTEGER NOT NULL,
    `nama` VARCHAR(60) NOT NULL,
    `username` VARCHAR(20) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `isOnline` ENUM('ONLINE', 'OFFLINE') NOT NULL,

    PRIMARY KEY (`id_operator`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banner` (
    `id_banner` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(40) NOT NULL,
    `banner_img` VARCHAR(100) NOT NULL,
    `tgl_posting` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id_banner`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `berita` (
    `id_berita` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(80) NOT NULL,
    `isi` TEXT NOT NULL,
    `foto` VARCHAR(100) NOT NULL,
    `tgl_posting` VARCHAR(20) NOT NULL,
    `tgl_expire` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_berita`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loket_pmb` (
    `no_loket` INTEGER NOT NULL,
    `id_operator` INTEGER NOT NULL,

    PRIMARY KEY (`no_loket`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operator_pmb` (
    `id_operator` INTEGER NOT NULL AUTO_INCREMENT,
    `no_loket` INTEGER NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_operator`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pelayanan` (
    `id_pelayanan` INTEGER NOT NULL AUTO_INCREMENT,
    `id_jenispelayanan` INTEGER NOT NULL,
    `nama_pelayanan` VARCHAR(80) NOT NULL,
    `keterangan` TEXT NOT NULL,

    PRIMARY KEY (`id_pelayanan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `selesai_pmb` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_antrian` VARCHAR(10) NOT NULL,
    `no_loket` INTEGER NOT NULL,
    `id_operator` INTEGER NOT NULL,
    `tanggal_pelayanan` DATETIME(3) NOT NULL,
    `waktu_pelayanan` TIME NOT NULL,
    `waktu_selesai_pelayanan` TIME NOT NULL,
    `puas` ENUM('YA', 'TIDAK') NOT NULL DEFAULT 'TIDAK',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_pelayanan` (
    `id_subpelayanan` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pelayanan` INTEGER NOT NULL,
    `nama_subpelayanan` VARCHAR(100) NOT NULL,
    `keterangan` TEXT NOT NULL,

    PRIMARY KEY (`id_subpelayanan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `temp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_antrian` INTEGER NOT NULL,
    `no_loket` VARCHAR(11) NULL,
    `no_antrian` VARCHAR(11) NULL,
    `nim` VARCHAR(100) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `temp_pmb` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_antrian` INTEGER NOT NULL,
    `no_loket` INTEGER NOT NULL,
    `no_antrian` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `video` (
    `id_video` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(80) NOT NULL,
    `video` VARCHAR(100) NOT NULL,
    `tgl_posting` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_video`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `antrian_student` ADD CONSTRAINT `antrian_student_no_rfid_fkey` FOREIGN KEY (`no_rfid`) REFERENCES `mahasiswa`(`no_rfid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `antrian_student` ADD CONSTRAINT `antrian_student_id_jenispelayanan_fkey` FOREIGN KEY (`id_jenispelayanan`) REFERENCES `jenis_pelayanan`(`id_jenispelayanan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `loket` ADD CONSTRAINT `loket_id_jenispelayanan_fkey` FOREIGN KEY (`id_jenispelayanan`) REFERENCES `jenis_pelayanan`(`id_jenispelayanan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `antrian_terlayani` ADD CONSTRAINT `antrian_terlayani_operator_fkey` FOREIGN KEY (`operator`) REFERENCES `operator`(`id_operator`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operator` ADD CONSTRAINT `operator_no_loket_fkey` FOREIGN KEY (`no_loket`) REFERENCES `loket`(`no_loket`) ON DELETE RESTRICT ON UPDATE CASCADE;
