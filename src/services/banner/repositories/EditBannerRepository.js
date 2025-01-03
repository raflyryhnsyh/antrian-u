const {banner:BannerModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { id_banner, judul, newFileImage } = params;

  const banner = await BannerModel.update({
    where: {
        id_banner:+id_banner
    },
    data: {
        judul: judul,
        banner_img: newFileImage
    }
  });
  return banner;
};