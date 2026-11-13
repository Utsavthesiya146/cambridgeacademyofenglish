-- Cambridge Academy of English – Production MySQL Database Migration
-- Hostinger MySQL & Standard Cloud MySQL Compatible

-- 1. Create leads table
CREATE TABLE IF NOT EXISTS `leads` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(50) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `learningMode` VARCHAR(50) NULL DEFAULT 'Offline',
    `preferredTime` VARCHAR(50) NULL DEFAULT 'Anytime',
    `message` TEXT NULL,
    `type` VARCHAR(50) NOT NULL DEFAULT 'enquiry',
    `status` VARCHAR(50) NOT NULL DEFAULT 'New',
    `pageUrl` VARCHAR(500) NULL,
    `leadSource` VARCHAR(191) NULL DEFAULT 'Website',
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),

    INDEX `leads_phone_idx`(`phone`),
    INDEX `leads_course_idx`(`course`),
    INDEX `leads_status_idx`(`status`),
    INDEX `leads_createdAt_idx`(`createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. Create certificates table
CREATE TABLE IF NOT EXISTS `certificates` (
    `id` VARCHAR(191) NOT NULL,
    `certificateNumber` VARCHAR(100) NOT NULL,
    `studentName` VARCHAR(191) NOT NULL,
    `courseName` VARCHAR(191) NOT NULL,
    `issueDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(50) NOT NULL DEFAULT 'VALID',
    `issuingInstitution` VARCHAR(191) NOT NULL DEFAULT 'Cambridge Academy of English',
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `certificates_certificateNumber_key`(`certificateNumber`),
    INDEX `certificates_certificateNumber_idx`(`certificateNumber`),
    INDEX `certificates_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 3. Create admin_sessions table for server-side session revocation
CREATE TABLE IF NOT EXISTS `admin_sessions` (
    `id` VARCHAR(191) NOT NULL,
    `jti` VARCHAR(100) NOT NULL,
    `revokedAt` DATETIME(3) NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `admin_sessions_jti_key`(`jti`),
    INDEX `admin_sessions_jti_idx`(`jti`),
    INDEX `admin_sessions_expiresAt_idx`(`expiresAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


