const prisma = require('../../../configs/database/instance');

module.exports= async () => {
    const berita = await prisma.berita.findMany();
    return berita;
}
