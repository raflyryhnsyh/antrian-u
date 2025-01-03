const {banner:BannerModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { id_banner } = params;
  
  const banner = await BannerModel.delete({where: {id_banner:+id_banner}});
  return banner;
};