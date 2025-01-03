/*
  Warnings:

  - The primary key for the `mahasiswa` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `antrian_student` DROP FOREIGN KEY `antrian_student_no_rfid_fkey`;

-- AlterTable
ALTER TABLE `antrian_student` MODIFY `no_rfid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `mahasiswa` DROP PRIMARY KEY,
    MODIFY `no_rfid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`no_rfid`);

-- AddForeignKey
ALTER TABLE `antrian_student` ADD CONSTRAINT `antrian_student_no_rfid_fkey` FOREIGN KEY (`no_rfid`) REFERENCES `mahasiswa`(`no_rfid`) ON DELETE RESTRICT ON UPDATE CASCADE;
