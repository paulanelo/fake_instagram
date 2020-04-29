const Post = (sequelize, DataTypes) => {
  return sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      texto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      n_likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },{
      tableName: 'posts',
      timestamps: false
    }
  )
};

module.exports = Post;