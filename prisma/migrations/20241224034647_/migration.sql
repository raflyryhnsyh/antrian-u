/*
  Warnings:

  - You are about to alter the column `tgl_posting` on the `berita` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `DateTime(3)`.
  - You are about to alter the column `tgl_expire` on the `berita` table. The data in that column could be lost. The data in that column will be cast from `VarChar(30)` to `DateTime(3)`.
  - You are about to alter the column `tgl_posting` on the `video` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `berita` MODIFY `tgl_posting` DATETIME(3) NOT NULL,
    MODIFY `tgl_expire` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `video` MODIFY `tgl_posting` DATETIME(3) NOT NULL;
