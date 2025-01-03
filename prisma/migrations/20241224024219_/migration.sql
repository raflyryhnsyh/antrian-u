/*
  Warnings:

  - You are about to alter the column `tgl_posting` on the `banner` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `DateTime(3)`.

*/
-- DropForeignKey
ALTER TABLE `antrian_student` DROP FOREIGN KEY `antrian_student_id_jenispelayanan_fkey`;

-- DropForeignKey
ALTER TABLE `antrian_terlayani` DROP FOREIGN KEY `antrian_terlayani_operator_fkey`;

-- DropForeignKey
ALTER TABLE `loket` DROP FOREIGN KEY `loket_id_jenispelayanan_fkey`;

-- DropForeignKey
ALTER TABLE `operator` DROP FOREIGN KEY `operator_no_loket_fkey`;

-- AlterTable
ALTER TABLE `banner` MODIFY `tgl_posting` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `antrian_student` ADD CONSTRAINT `antrian_student_id_jenispelayanan_fkey` FOREIGN KEY (`id_jenispelayanan`) REFERENCES `jenis_pelayanan`(`id_jenispelayanan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `loket` ADD CONSTRAINT `loket_id_jenispelayanan_fkey` FOREIGN KEY (`id_jenispelayanan`) REFERENCES `jenis_pelayanan`(`id_jenispelayanan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `antrian_terlayani` ADD CONSTRAINT `antrian_terlayani_operator_fkey` FOREIGN KEY (`operator`) REFERENCES `operator`(`id_operator`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operator` ADD CONSTRAINT `operator_no_loket_fkey` FOREIGN KEY (`no_loket`) REFERENCES `loket`(`no_loket`) ON DELETE CASCADE ON UPDATE CASCADE;
