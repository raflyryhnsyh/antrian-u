const {banner:BannerModel} = require('../../../utils/database')

module.exports= async ({ judul, newFileImage, tgl_posting }) => {
    const banner = await BannerModel.create({
        data: {
            judul,
            banner_img: newFileImage,
            tgl_posting
        }
    });
    return banner;
}