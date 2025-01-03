const prisma = require('../../../configs/database/instance');

module.exports= async () => {
    const video = await prisma.video.findMany();
    return video;
}
