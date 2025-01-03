const {video:VideoModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { id_video } = params;
  
  const video = await VideoModel.delete({where: {id_video:+id_video}});
  return video;
};